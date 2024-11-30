import { useDarkMode } from "../hooks/useDarKMode";
import useItemsPerPageDaysList from "../hooks/useItemsPerPageDaysList";

const ItemsPerPageDaysList = () => {
  const { itemsPerPage, handleItemsPerPageChange } = useItemsPerPageDaysList();
  const { isDarkMode } = useDarkMode();

  return (
    <div className="flex items-center space-x-3">
      <label
        htmlFor="itemsPerPage"
        className={` font-medium ${
          isDarkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Items per Page:
      </label>
      <select
        id="itemsPerPage"
        value={itemsPerPage === Infinity ? "all" : itemsPerPage}
        onChange={handleItemsPerPageChange}
        className={` px-4 py-2 border rounded-lg cursor-pointer shadow-md focus:outline-none focus:ring-2 ${
          isDarkMode
            ? "bg-gray-800 text-gray-300 border-gray-600 focus:ring-blue-400"
            : "bg-white text-gray-700 border-gray-300 focus:ring-blue-500"
        }`}
      >
        {[1, 2, 3, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, "all"].map(
          (number) => (
            <option key={number} value={number === "all" ? "all" : number}>
              {number === "all" ? "All" : number}
            </option>
          )
        )}
      </select>
    </div>
  );
};

export default ItemsPerPageDaysList;
