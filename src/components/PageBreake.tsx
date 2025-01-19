import React, {
  useEffect,
  useRef,
  useState,
  ReactElement,
  ReactNode,
  isValidElement,
} from "react";

interface PageBreakContainerProps {
  children: ReactNode;
  pageHeight?: number;
  pageClassName?: string;
  onPageChange?: (pageCount: number) => void;
}

type ValidReactElement = ReactElement & {
  props: {
    style?: React.CSSProperties;
    children?: ReactNode;
  };
};

const PageBreakContainer: React.FC<PageBreakContainerProps> = ({
  children,
  pageHeight = 1000,
  pageClassName = "print-page",
  onPageChange,
}) => {
  const [pages, setPages] = useState<ValidReactElement[][]>([]);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<MutationObserver | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  const measureElement = (element: HTMLElement): number => {
    const styles = window.getComputedStyle(element);
    const marginTop = parseFloat(styles.marginTop);
    const marginBottom = parseFloat(styles.marginBottom);
    return element.offsetHeight + marginTop + marginBottom;
  };

  const calculatePages = (): void => {
    if (!contentRef.current) return;

    const content = contentRef.current;
    const elements = React.Children.toArray(children).filter(
      isValidElement,
    ) as ValidReactElement[];
    const measureContainer = document.createElement("div");
    measureContainer.style.position = "absolute";
    measureContainer.style.visibility = "hidden";
    measureContainer.style.width = `${content.offsetWidth}px`;
    document.body.appendChild(measureContainer);

    const newPages: ValidReactElement[][] = [];
    let currentPage: ValidReactElement[] = [];
    let currentHeight = 0;

    elements.forEach((element) => {
      // Create a temporary DOM element to measure
      const tempDiv = document.createElement("div");
      measureContainer.appendChild(tempDiv);
      const Component = () => element;
      const root = document.createElement("div");
      measureContainer.appendChild(root);
      // @ts-ignore - React 18 createRoot API
      const reactRoot = React.createRoot(root);
      reactRoot.render(<Component />);

      const totalHeight = measureElement(root);
      measureContainer.removeChild(root);

      if (currentHeight + totalHeight > pageHeight) {
        if (currentPage.length > 0) {
          newPages.push(currentPage);
          currentPage = [];
          currentHeight = 0;
        }

        if (totalHeight > pageHeight) {
          newPages.push([element]);
        } else {
          currentPage.push(element);
          currentHeight = totalHeight;
        }
      } else {
        currentPage.push(element);
        currentHeight += totalHeight;
      }
    });

    if (currentPage.length > 0) {
      newPages.push(currentPage);
    }

    document.body.removeChild(measureContainer);
    setPages(newPages);
    onPageChange?.(newPages.length);
  };

  useEffect(() => {
    resizeObserverRef.current = new ResizeObserver(() => {
      calculatePages();
    });

    observerRef.current = new MutationObserver(() => {
      calculatePages();
    });

    if (contentRef.current) {
      resizeObserverRef.current.observe(contentRef.current);
      observerRef.current.observe(contentRef.current, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true,
      });
    }

    calculatePages();

    return () => {
      resizeObserverRef.current?.disconnect();
      observerRef.current?.disconnect();
    };
  }, [pageHeight, children]);

  const renderElement = (
    element: ValidReactElement,
    index: number,
  ): ReactElement => {
    if (!isValidElement(element)) {
      return <React.Fragment key={index} />;
    }

    return React.cloneElement(element, {
      key: index,
      style: {
        ...element.props.style,
        pageBreakInside: "avoid" as const,
      },
    });
  };

  return (
    <div className="page-break-container">
      {/* Hidden original content for measurements */}
      <div
        ref={contentRef}
        style={{ position: "absolute", visibility: "hidden", width: "100%" }}
      >
        {children}
      </div>

      {/* Rendered pages */}
      {pages.map((pageElements, pageIndex) => (
        <div
          key={`page-${pageIndex}`}
          className={pageClassName}
          data-page-number={pageIndex + 1}
        >
          {pageElements.map((element, elementIndex) =>
            renderElement(element, elementIndex),
          )}
        </div>
      ))}
    </div>
  );
};

export default PageBreakContainer;
