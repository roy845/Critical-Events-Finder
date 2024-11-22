import React from "react";
import { setSearchCriticalEvents } from "../features/criticalEvents/criticalEventsSlice";
import { useAppDispatch } from "../app/hooks";

interface SuggestionsProps {
  suggestions: string[];
  setInputValue: (value: React.SetStateAction<string>) => void;
  setSuggestions: (value: React.SetStateAction<string[]>) => void;
  isDarkMode: boolean;
}

const Suggestions: React.FC<SuggestionsProps> = ({
  suggestions,
  setInputValue,
  setSuggestions,
  isDarkMode,
}) => {
  const dispatch = useAppDispatch();

  return (
    <ul
      className={`absolute left-0 top-full mt-2 w-full border rounded-lg shadow-lg z-10 transition-opacity duration-300 ease-in-out ${
        isDarkMode
          ? "bg-gray-700 border-gray-600 text-gray-300"
          : "bg-white border-gray-300 text-gray-700"
      }`}
    >
      {suggestions.map((suggestion: string, index: number) => (
        <li
          key={index}
          className={`px-4 py-2 cursor-pointer transform transition duration-300 ease-in-out hover:bg-gray-600 hover:text-white ${
            isDarkMode
              ? "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:scale-105"
              : "bg-white text-gray-700 hover:bg-gray-200 hover:scale-105"
          }`}
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
