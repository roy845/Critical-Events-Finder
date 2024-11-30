import { DurationUnit } from "../types/types";

interface DurationUnitSelectProps {
  durationUnit: DurationUnit;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  isDarkMode: boolean;
}

const DurationUnitSelect: React.FC<DurationUnitSelectProps> = ({
  durationUnit,
  onChange,
  isDarkMode,
}) => {
  return (
    <div className="mt-2">
      <label
        className={`block font-medium ${
          isDarkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Select duration unit:
      </label>
      <select
        className={`mt-2 px-4 py-2 border rounded-lg shadow-md cursor-pointer focus:outline-none focus:ring-2 appearance-none ${
          isDarkMode
            ? "bg-gray-800 text-gray-300 border-gray-600 focus:ring-blue-400"
            : "bg-white text-gray-700 border-gray-300 focus:ring-blue-500"
        }`}
        value={durationUnit}
        onChange={onChange}
      >
        <option value="none">None</option>
        <option value="ms">Milliseconds (ms)</option>
        <option value="s">Seconds (s)</option>
      </select>
    </div>
  );
};

export default DurationUnitSelect;
