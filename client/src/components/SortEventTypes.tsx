type SortEventTypesProps = {
  sortOrder: "asc" | "desc" | "none";
  isDarkMode: boolean;
  handleSortChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SortEventTypes = ({
  sortOrder,
  isDarkMode,
  handleSortChange,
}: SortEventTypesProps) => {
  return (
    <select
      id="sortOrder"
      value={sortOrder}
      onChange={handleSortChange}
      className={`mt-2 px-4 py-2 border rounded-lg shadow-md cursor-pointer focus:outline-none focus:ring-2 appearance-none ${
        isDarkMode
          ? "bg-gray-800 text-gray-300 border-gray-600 focus:ring-blue-400"
          : "bg-white text-gray-700 border-gray-300 focus:ring-blue-500"
      }`}
    >
      <option value="none">None</option>
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>
  );
};

export default SortEventTypes;
