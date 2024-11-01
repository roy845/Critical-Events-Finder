import { useDaysInput } from "../hooks/useDaysInput";

const DaysInput = () => {
  const { daysInput, handleInputChange, handleAddDays } = useDaysInput();

  return (
    <div>
      <label
        className="block text-gray-700 font-medium mb-2"
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
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="button"
        onClick={handleAddDays}
        className="mt-2 w-full py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition"
      >
        Add Days
      </button>
    </div>
  );
};

export default DaysInput;
