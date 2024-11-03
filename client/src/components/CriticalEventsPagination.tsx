import { GrPrevious } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import useCriticalEventsPagination from "../hooks/useCriticalEventsPagination";

const CriticalEventsPagination = (): JSX.Element => {
  const { currentPage, handlePageChange, totalPages } =
    useCriticalEventsPagination();

  return (
    <div className="flex justify-between items-center mt-4 space-x-4">
      <button
        type="button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`py-2 px-4 rounded focus:outline-none focus:shadow-outline font-bold text-white ${
          currentPage === 1
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-700 cursor-pointer"
        }`}
      >
        <GrPrevious />
      </button>

      <span>
        {currentPage}/{totalPages}
      </span>

      <button
        type="button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages || currentPage > totalPages}
        className={`py-2 px-4 rounded focus:outline-none focus:shadow-outline font-bold text-white ${
          currentPage === totalPages || currentPage > totalPages
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-700 cursor-pointer"
        }`}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default CriticalEventsPagination;
