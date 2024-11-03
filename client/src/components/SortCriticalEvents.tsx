import useSortCriticalEvents from "../hooks/useSortCriticalEvents";

const SortCriticalEvents = () => {
  const { sortOrder, handleSortChange } = useSortCriticalEvents();
  return (
    <div className="flex items-center space-x-3">
      <label htmlFor="sortOrder" className="text-gray-700 mb-4 font-medium">
        Sort by Name:
      </label>
      <select
        id="sortOrder"
        value={sortOrder || ""}
        onChange={handleSortChange}
        className="mb-4 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-white"
      >
        <option value="">None</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default SortCriticalEvents;
