import { useDarkMode } from "../hooks/useDarKMode";
import useSearchCriticalEvents from "../hooks/useSearchCriticalEvents";

const SearchCriticalEvents = (): JSX.Element => {
  const { inputValue, handleChange, inputRef } = useSearchCriticalEvents();
  const { isDarkMode } = useDarkMode();

  return (
    <div className="w-full max-w-xs mb-5">
      <input
        type="text"
        ref={inputRef}
        value={inputValue}
        onChange={handleChange}
        placeholder="Search Critical Events..."
        className={`mt-2 w-full px-4 py-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 ${
          isDarkMode
            ? "bg-gray-800 text-gray-300 border-gray-600 focus:ring-blue-400 placeholder-gray-400"
            : "bg-white text-gray-700 border-gray-300 focus:ring-blue-500 placeholder-gray-500"
        }`}
      />
    </div>
  );
};

export default SearchCriticalEvents;
