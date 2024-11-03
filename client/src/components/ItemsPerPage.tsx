import useItemsPerPage from "../hooks/useItemsPerPage";

const ItemsPerPage = () => {
  const { itemsPerPage, handleItemsPerPageChange } = useItemsPerPage();

  return (
    <div className="flex items-center space-x-3">
      <label htmlFor="sortOrder" className="text-gray-700 mb-4 font-medium">
        Items per Page:
      </label>
      <select
        id="itemsPerPage"
        value={itemsPerPage}
        onChange={handleItemsPerPageChange}
        className="mb-4 px-4 py-2 border hover:cursor-pointer border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-white"
      >
        {[1, 2, 3, 5, 10, 15, 20, 25, 30, 35].map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ItemsPerPage;
