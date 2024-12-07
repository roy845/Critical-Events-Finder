import React from "react";

interface LetterSelectorProps {
  availableLetters: string[];
  selectedLetter: string;
  onChange: (letter: string) => void;
  isDarkMode: boolean;
}

const LetterSelector: React.FC<LetterSelectorProps> = ({
  availableLetters,
  selectedLetter,
  onChange,
  isDarkMode,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="flex justify-center space-x-3">
      <label
        htmlFor="letter-selector"
        className={`mt-2 font-medium ${
          isDarkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Select Letter:
      </label>
      <select
        value={selectedLetter}
        onChange={handleChange}
        className={`px-4 py-2 border rounded-lg cursor-pointer shadow-md focus:outline-none focus:ring-2 ${
          isDarkMode
            ? "bg-gray-800 text-gray-300 border-gray-600 focus:ring-blue-400"
            : "bg-white text-gray-700 border-gray-300 focus:ring-blue-500"
        }`}
      >
        <option value="All">All</option>
        {availableLetters.map((letter) => (
          <option key={letter} value={letter}>
            {letter}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LetterSelector;
