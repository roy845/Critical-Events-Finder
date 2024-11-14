import useGraphsAccordion from "../hooks/useGraphsAccordion";
import { FaChartArea } from "react-icons/fa";

interface GraphsAccordionProps {
  title: string;
  children: React.ReactNode;
}

const GraphsAccordion = ({ title, children }: GraphsAccordionProps) => {
  const { isDarkMode, isOpen, toggleAccordion } = useGraphsAccordion();

  return (
    <div
      className={`border rounded-lg mb-4 ${
        isDarkMode ? "border-gray-700" : "border-gray-300"
      }`}
    >
      <button
        onClick={toggleAccordion}
        className={`w-full text-left px-4 py-2 font-semibold focus:outline-none flex items-center ${
          isOpen
            ? isDarkMode
              ? "bg-gray-700 text-white"
              : "bg-gray-300 text-gray-900"
            : isDarkMode
            ? "bg-gray-800 text-white"
            : "bg-gray-200 text-gray-900"
        }`}
      >
        <FaChartArea className="mr-2" />
        <span>{title}</span>
        <span className="ml-auto">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div
          className={`p-4 ${
            isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default GraphsAccordion;
