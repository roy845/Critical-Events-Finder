import { CiSearch } from "react-icons/ci";
import useSearchCriticalEvents from "../hooks/useSearchCriticalEvents";
import { useDarkMode } from "../hooks/useDarKMode";
import Suggestions from "./Suggestions";

const SearchCriticalEvents = (): JSX.Element => {
  const {
    inputValue,
    handleChange,
    inputRef,
    containerRef,
    suggestions,
    setInputValue,
    setSuggestions,
  } = useSearchCriticalEvents();
  const { isDarkMode } = useDarkMode();

  return (
    <div className="w-full max-w-xs mb-5 relative" ref={containerRef}>
      <CiSearch
        className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
          isDarkMode ? "text-gray-300" : "text-gray-500"
        }`}
        size={20}
      />
      <input
        type="text"
        ref={inputRef}
        value={inputValue}
        onChange={handleChange}
        placeholder="Search Critical Events..."
        className={`pl-10 w-full px-4 py-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 ${
          isDarkMode
            ? "bg-gray-800 text-gray-300 border-gray-600 focus:ring-blue-400 placeholder-gray-400"
            : "bg-white text-gray-700 border-gray-300 focus:ring-blue-500 placeholder-gray-500"
        }`}
      />
      {suggestions.length > 0 && (
        <Suggestions
          suggestions={suggestions}
          setInputValue={setInputValue}
          setSuggestions={setSuggestions}
          isDarkMode={isDarkMode}
        />
      )}
    </div>
  );
};

export default SearchCriticalEvents;
