import React from "react";
import { setSearchCriticalEvents } from "../features/criticalEvents/criticalEventsSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

interface SuggestionsProps {
  suggestions: string[];
  setInputValue: (value: React.SetStateAction<string>) => void;
  setSuggestions: (value: React.SetStateAction<string[]>) => void;
  isDarkMode: boolean;
}

const Suggestions = ({
  suggestions,
  setInputValue,
  setSuggestions,
  isDarkMode,
}: SuggestionsProps) => {
  const dispatch = useAppDispatch();

  const { isTyping } = useAppSelector((state) => state.criticalEvents);

  return isTyping ? (
    <div
      className={`absolute left-0 top-full mt-2 w-full flex justify-center items-center rounded-lg z-10 transition-opacity duration-300 ease-in-out ${
        isDarkMode ? "bg-gray-700 text-gray-300" : "bg-white text-gray-700"
      }`}
      style={{ maxHeight: "200px", height: "50px", overflowX: "hidden" }}
    >
      <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-gray-500"></div>
    </div>
  ) : (
    <ul
      className={`absolute left-0 top-full mt-2 w-full border rounded-lg shadow-lg z-10 transition-opacity duration-300 ease-in-out overflow-y-auto ${
        isDarkMode
          ? "bg-gray-700 border-gray-600 text-gray-300"
          : "bg-white border-gray-300 text-gray-700"
      }`}
      style={{ maxHeight: "200px", overflowX: "hidden" }}
    >
      {suggestions.map((suggestion: string, index: number) => (
        <li
          key={index}
          className={`px-4 py-2 cursor-pointer transform transition duration-300 ease-in-out hover:bg-gray-600 hover:text-white ${
            isDarkMode
              ? "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:scale-105"
              : "bg-white text-gray-700 hover:bg-gray-200 hover:scale-105"
          }`}
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          onClick={() => {
            setInputValue(suggestion);
            dispatch(setSearchCriticalEvents(suggestion));
            setSuggestions([]);
          }}
        >
          {suggestion}
        </li>
      ))}
    </ul>
  );
};

export default Suggestions;
