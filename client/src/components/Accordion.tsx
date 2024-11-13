import { FileProperties } from "../types/types";
import useAccordion from "../hooks/useAccordion";
import { formatFileSize } from "../utils/utils";
import { useDarkMode } from "../hooks/useDarKMode";

interface AccordionProps {
  file: FileProperties | null;
}

const Accordion = ({ file }: AccordionProps) => {
  const { isDarkMode } = useDarkMode();
  const { isOpen, toggleAccordion } = useAccordion();

  return (
    <div className="w-full max-w-md mx-auto my-4">
      <div
        onClick={toggleAccordion}
        className={`w-full p-4 font-semibold rounded-t-md cursor-pointer select-none ${
          isDarkMode
            ? "bg-gray-800 text-white border border-gray-600"
            : "bg-blue-500 text-white"
        }`}
      >
        File Properties
        <span
          className={`float-right ${
            isOpen ? "rotate-180" : ""
          } transition-transform`}
        >
          ▼
        </span>
      </div>
      {isOpen && file && (
        <div
          className={`p-4 border rounded-b-md ${
            isDarkMode
              ? "bg-gray-800 border-gray-600 text-gray-300"
              : "bg-gray-100 border-gray-300 text-gray-800"
          }`}
        >
          <p>
            <strong>Name:</strong> {file.name}
          </p>
          <p>
            <strong>Size:</strong> {formatFileSize(file.size)}
          </p>
          <p>
            <strong>Type:</strong> {file.type}
          </p>
          <p>
            <strong>Last Modified:</strong>{" "}
            {new Date(file.lastModified).toLocaleDateString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
