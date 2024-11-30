import { GrPrevious } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { useDarkMode } from "../hooks/useDarKMode";
import useDaysListPagination from "../hooks/useDaysListPagination";

const DaysListPagination = (): JSX.Element | null => {
  const { currentPage, handlePageChange, totalPages } = useDaysListPagination();
  const { isDarkMode } = useDarkMode();

  if (totalPages === 1) {
    return null;
  }

  return (
    <div className="flex justify-between items-center mt-4 space-x-4">
      <button
        type="button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`py-2 px-4 rounded focus:outline-none focus:shadow-outline font-bold ${
          currentPage === 1
            ? "bg-gray-400 cursor-not-allowed"
            : isDarkMode
            ? "bg-gray-600 hover:bg-gray-500 text-white"
            : "bg-blue-500 hover:bg-blue-700 text-white"
        }`}
      >
        <GrPrevious />
      </button>

      <span className={isDarkMode ? "text-gray-300" : "text-gray-800"}>
        {currentPage}/{totalPages}
      </span>

      <button
        type="button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages || currentPage > totalPages}
        className={`py-2 px-4 rounded focus:outline-none focus:shadow-outline font-bold ${
          currentPage === totalPages || currentPage > totalPages
            ? "bg-gray-400 cursor-not-allowed"
            : isDarkMode
            ? "bg-gray-600 hover:bg-gray-500 text-white"
            : "bg-blue-500 hover:bg-blue-700 text-white"
        }`}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default DaysListPagination;
