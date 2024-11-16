import { FileProperties } from "../types/types";
import useAccordion from "../hooks/useAccordion";
import { Utils } from "../utils/utils";
import { IoMdSettings } from "react-icons/io";
import { useDarkMode } from "../hooks/useDarKMode";

interface AccordionProps {
  file: FileProperties | null;
}

const Accordion = ({ file }: AccordionProps) => {
  const { isDarkMode } = useDarkMode();
  const { isOpen, toggleAccordion } = useAccordion();

  return (
    <div
      className={`w-full max-w-md mx-auto my-4 border rounded-lg mb-4 ${
        isDarkMode ? "border-gray-700" : "border-gray-300"
      }`}
    >
      <div
        onClick={toggleAccordion}
        className={`w-full text-left px-4 py-2 font-semibold focus:outline-none cursor-pointer flex items-center ${
          isOpen
            ? isDarkMode
              ? "bg-gray-700 text-white"
              : "bg-gray-300 text-gray-900"
            : isDarkMode
            ? "bg-gray-800 text-white"
            : "bg-gray-200 text-gray-900"
        }`}
      >
        <IoMdSettings className="mr-2" />
        <span>File Properties</span>
        <span
          className={`ml-auto transform ${
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
            <strong>Size:</strong> {Utils.formatFileSize(file.size)}
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
