import { MdOutlineSearchOff } from "react-icons/md";
import { useDarkMode } from "../hooks/useDarKMode";

interface NoResultsFoundProps {
  message?: string;
}

const NoResultsFound = ({
  message = "No search results found.",
}: NoResultsFoundProps) => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`flex flex-col items-center justify-center py-10 ${
        isDarkMode ? "text-gray-400" : "text-gray-500"
      }`}
    >
      <MdOutlineSearchOff size={60} />
      <p className="mt-4 text-lg font-semibold">{message}</p>
    </div>
  );
};

export default NoResultsFound;
