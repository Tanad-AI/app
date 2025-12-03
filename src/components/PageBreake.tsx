import React, {
  useState,
  useEffect,
  useRef,
  ReactElement,
  ReactNode,
} from "react";

interface PageBreakContainerProps {
  children: ReactNode;
  pageHeight?: number;
  pageClassName?: string;
  onPageChange?: (pageCount: number) => void;
  gap?: number;
}

interface MeasuredElement {
  element: ReactElement;
  height: number;
  canBreak: boolean;
}

const PageBreakContainer: React.FC<PageBreakContainerProps> = ({
  children,
  pageHeight = 1000,
  pageClassName = "print-page",
  onPageChange,
  gap = 0,
}) => {
  const [pages, setPages] = useState<ReactElement[][]>([]);
  const measureRef = useRef<HTMLDivElement>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const calculationTimeoutRef = useRef<NodeJS.Timeout>();

  // Debounced calculation to avoid rapid recalculations
  const scheduleCalculation = () => {
    if (calculationTimeoutRef.current) {
      clearTimeout(calculationTimeoutRef.current);
    }
    calculationTimeoutRef.current = setTimeout(() => {
      calculatePages();
    }, 100);
  };

  const calculatePages = () => {
    if (!measureRef.current || isCalculating) return;
    setIsCalculating(true);

    // Use requestAnimationFrame to ensure layout is complete
    requestAnimationFrame(() => {
      const container = measureRef.current;
      if (!container) {
        setIsCalculating(false);
        return;
      }

      const childElements = Array.from(container.children) as HTMLElement[];
      const elements = React.Children.toArray(children).filter(
        (child): child is ReactElement => React.isValidElement(child),
      );

      if (childElements.length !== elements.length) {
        setIsCalculating(false);
        return;
      }

      // Measure all elements
      const measured: MeasuredElement[] = elements.map((element, index) => {
        const domElement = childElements[index];
        const rect = domElement.getBoundingClientRect();
        const styles = window.getComputedStyle(domElement);
        const marginTop = parseFloat(styles.marginTop) || 0;
        const marginBottom = parseFloat(styles.marginBottom) || 0;
        const totalHeight = rect.height + marginTop + marginBottom;

        // Check if element allows page breaks inside
        const canBreak =
          styles.pageBreakInside !== "avoid" &&
          element.props?.["data-allow-break"] !== false;

        return {
          element,
          height: totalHeight,
          canBreak,
        };
      });

      // Distribute elements across pages
      const newPages: ReactElement[][] = [];
      let currentPage: ReactElement[] = [];
      let currentHeight = 0;

      measured.forEach(({ element, height }) => {
        const elementWithGap = height + gap;

        // Check if element fits on current page
        if (currentHeight + elementWithGap <= pageHeight) {
          currentPage.push(element);
          currentHeight += elementWithGap;
        } else {
          // Start new page
          if (currentPage.length > 0) {
            newPages.push([...currentPage]);
            currentPage = [];
            currentHeight = 0;
          }

          // If element is larger than page height, still add it
          // (it will overflow but that's better than losing it)
          currentPage.push(element);
          currentHeight = elementWithGap;
        }
      });

      // Add remaining elements
      if (currentPage.length > 0) {
        newPages.push(currentPage);
      }

      setPages(newPages);
      onPageChange?.(newPages.length);
      setIsCalculating(false);
    });
  };

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      scheduleCalculation();
    });

    const mutationObserver = new MutationObserver(() => {
      scheduleCalculation();
    });

    if (measureRef.current) {
      observer.observe(measureRef.current);
      mutationObserver.observe(measureRef.current, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true,
      });
    }

    // Initial calculation
    scheduleCalculation();

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      if (calculationTimeoutRef.current) {
        clearTimeout(calculationTimeoutRef.current);
      }
    };
  }, [children, pageHeight, gap]);

  return (
    <>
      {/* Measurement container - rendered but hidden */}
      <div
        ref={measureRef}
        style={{
          position: "absolute",
          left: "-9999px",
          top: 0,
          visibility: "hidden",
          width: "210mm", // A4 width, adjust as needed
        }}
        aria-hidden="true"
      >
        {children}
      </div>

      {/* Rendered pages */}
      <div className="pages-container">
        {pages.map((pageElements, pageIndex) => (
          <div
            key={pageIndex}
            className={pageClassName}
            style={{
              minHeight: `${pageHeight}px`,
              maxHeight: `${pageHeight}px`,
              overflow: "hidden",
              pageBreakAfter: "always",
              position: "relative",
            }}
            data-page-number={pageIndex + 1}
          >
            {pageElements.map((element, elementIndex) =>
              React.cloneElement(element, {
                key: `${pageIndex}-${elementIndex}`,
              }),
            )}
          </div>
        ))}
      </div>
    </>
  );
};
