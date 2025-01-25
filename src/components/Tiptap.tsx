import React, { useRef, useState, useEffect } from "react";
import {
  Bold,
  Italic,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Undo,
  Redo,
} from "lucide-react";

interface TiptapProps {
  value: string;
  onChange: (value: string) => void;
  rtl?: boolean;
}

interface ToolbarButtonProps {
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const ToolbarButton: React.FC<ToolbarButtonProps> = ({
  onClick,
  active = false,
  disabled = false,
  children,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      rounded-lg p-2 transition-colors
      ${
        active ? "bg-blue-100 text-blue-600" : "text-gray-700 hover:bg-gray-100"
      }
      ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
    `}
    type="button"
  >
    {children}
  </button>
);

const Tiptap: React.FC<TiptapProps> = ({ value, onChange, rtl = true }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [isRTL, setIsRTL] = useState(rtl);

  // Sync the editor content with the value prop
  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value;
    }
  }, [value]);

  const execCommand = (command: string, value: string | boolean = false) => {
    document.execCommand(command, false, value.toString());
    editorRef.current?.focus();
    handleChange();
  };

  const toggleDirection = () => {
    if (editorRef.current) {
      setIsRTL(!isRTL);
      editorRef.current.dir = isRTL ? "ltr" : "rtl";
      editorRef.current.style.textAlign = isRTL ? "left" : "right";
      handleChange();
    }
  };

  const handleChange = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  return (
    <div className="w-full rounded-lg border bg-white">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-1 border-b p-2">
        {/* Text Formatting */}
        <div className="flex gap-1 border-r border-gray-200 pr-2">
          <ToolbarButton onClick={() => execCommand("bold")}>
            <Bold size={18} />
          </ToolbarButton>
          <ToolbarButton onClick={() => execCommand("italic")}>
            <Italic size={18} />
          </ToolbarButton>
        </div>

        {/* Alignment */}
        <div className="flex gap-1 border-r border-gray-200 pr-2">
          <ToolbarButton onClick={() => execCommand("justifyLeft")}>
            <AlignLeft size={18} />
          </ToolbarButton>
          <ToolbarButton onClick={() => execCommand("justifyCenter")}>
            <AlignCenter size={18} />
          </ToolbarButton>
          <ToolbarButton onClick={() => execCommand("justifyRight")}>
            <AlignRight size={18} />
          </ToolbarButton>
        </div>

        {/* Lists */}
        <div className="flex gap-1 border-r border-gray-200 pr-2">
          <ToolbarButton onClick={() => execCommand("insertUnorderedList")}>
            <List size={18} />
          </ToolbarButton>
          <ToolbarButton onClick={() => execCommand("insertOrderedList")}>
            <ListOrdered size={18} />
          </ToolbarButton>
        </div>

        {/* History */}
        <div className="flex gap-1 border-r border-gray-200 pr-2">
          <ToolbarButton onClick={() => execCommand("undo")}>
            <Undo size={18} />
          </ToolbarButton>
          <ToolbarButton onClick={() => execCommand("redo")}>
            <Redo size={18} />
          </ToolbarButton>
        </div>

        {/* RTL Toggle */}
        <button
          onClick={toggleDirection}
          className="rounded bg-gray-100 px-3 py-1 text-sm hover:bg-gray-200"
        >
          {isRTL ? "RTL" : "LTR"}
        </button>
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        className="min-h-[200px] p-4 focus:outline-none"
        dir={isRTL ? "rtl" : "ltr"}
        style={{
          textAlign: isRTL ? "right" : "left",
        }}
        onInput={handleChange}
        onBlur={handleChange}
      />

      <style>{`
        /* Fix list marker alignment for RTL */
        [dir="rtl"] ul,
        [dir="rtl"] ol {
          padding: 0 1.25rem 0 0;
        }

        [dir="rtl"] ul li {
          list-style-position: inside;
          margin-right: 1em;
        }

        [dir="rtl"] ol li {
          list-style-position: inside;
          margin-right: 1em;
        }
      `}</style>
    </div>
  );
};

export default Tiptap;
