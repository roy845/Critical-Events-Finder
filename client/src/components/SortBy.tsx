type SortByProps = {
  isDarkMode: boolean;
  sortType: "frequency" | "name";
  handleSortTypeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SortBy = ({
  isDarkMode,
  sortType,
  handleSortTypeChange,
}: SortByProps) => {
  return (
    <select
      id="sortType"
      value={sortType}
      onChange={handleSortTypeChange}
      className={`mt-2 px-4 py-2 border rounded-lg shadow-md cursor-pointer focus:outline-none focus:ring-2 appearance-none ${
        isDarkMode
          ? "bg-gray-800 text-gray-300 border-gray-600 focus:ring-blue-400"
          : "bg-white text-gray-700 border-gray-300 focus:ring-blue-500"
      }`}
    >
      <option value="frequency">Frequency</option>
      <option value="name">Name</option>
    </select>
  );
};

export default SortBy;
