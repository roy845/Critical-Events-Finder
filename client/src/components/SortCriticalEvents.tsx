import { FaSortAlphaUpAlt } from "react-icons/fa";
import { FaSortAlphaDownAlt } from "react-icons/fa";
import { useDarkMode } from "../hooks/useDarKMode";
import useSortCriticalEvents from "../hooks/useSortCriticalEvents";

const SortCriticalEvents = () => {
  const { sortOrder, handleSortChange } = useSortCriticalEvents();
  const { isDarkMode } = useDarkMode();

  return (
    <div className="flex items-center space-x-3">
      <label
        htmlFor="sortOrder"
        className={`mb-4 font-medium ${
          isDarkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Sort by Name:
      </label>

      <div className="relative">
        <select
          id="sortOrder"
          value={sortOrder || ""}
          onChange={handleSortChange}
          className={`mb-4 px-4 py-2 border rounded-lg shadow-md cursor-pointer focus:outline-none focus:ring-2 appearance-none ${
            isDarkMode
              ? "bg-gray-800 text-gray-300 border-gray-600 focus:ring-blue-400"
              : "bg-white text-gray-700 border-gray-300 focus:ring-blue-500"
          }`}
        >
          <option value="">None</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      {sortOrder === "asc" && <FaSortAlphaUpAlt />}
      {sortOrder === "desc" && <FaSortAlphaDownAlt />}
    </div>
  );
};

export default SortCriticalEvents;
