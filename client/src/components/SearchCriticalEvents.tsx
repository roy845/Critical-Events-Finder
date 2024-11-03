import useSearchCriticalEvents from "../hooks/useSearchCriticalEvents";

const SearchCriticalEvents = (): JSX.Element => {
  const { inputValue, handleChange, inputRef } = useSearchCriticalEvents();

  return (
    <div className="w-full max-w-xs mb-5">
      <input
        type="text"
        ref={inputRef}
        value={inputValue}
        onChange={handleChange}
        placeholder="Search Critical Events..."
        className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchCriticalEvents;
