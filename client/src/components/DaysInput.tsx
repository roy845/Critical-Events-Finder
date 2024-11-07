import { useDarkMode } from "../hooks/useDarKMode";
import { useDaysInput } from "../hooks/useDaysInput";
import { AiOutlinePlus } from "react-icons/ai";

const DaysInput = () => {
  const { daysInput, handleInputChange, handleAddDays } = useDaysInput();
  const { isDarkMode } = useDarkMode();

  return (
    <div>
      <label
        className={`block font-medium mb-2 ${
          isDarkMode ? "text-gray-300" : "text-gray-700"
        }`}
        htmlFor="daysInput"
      >
        Number of Days
      </label>

      <input
        type="number"
        id="daysInput"
        placeholder="Enter number of days"
        value={daysInput}
        onChange={(e) => handleInputChange(e.target.value)}
        className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
          isDarkMode
            ? "bg-gray-800 border-gray-600 text-gray-300 focus:ring-blue-400"
            : "bg-white border-gray-300 text-gray-900 focus:ring-blue-500"
        }`}
      />
      <button
        type="button"
        onClick={handleAddDays}
        className={`mt-2 w-full py-2 font-semibold rounded-md transition ${
          isDarkMode
            ? "bg-green-600 hover:bg-green-500 text-white"
            : "bg-green-500 hover:bg-green-600 text-white"
        }`}
      >
        <span className="flex justify-center gap-4">
          {" "}
          Add Days
          <span className="mt-1">
            <AiOutlinePlus />
          </span>
        </span>
      </button>
    </div>
  );
};

export default DaysInput;
