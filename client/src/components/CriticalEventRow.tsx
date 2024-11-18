import useCriticalEventRow from "../hooks/useCriticalEventRow";
import { useDarkMode } from "../hooks/useDarKMode";

interface CriticalEventRowProps {
  event: string;
}

const CriticalEventRow = ({ event }: CriticalEventRowProps) => {
  const { handleMouseEnter, handleMouseLeave, hoverColor } =
    useCriticalEventRow();
  const { isDarkMode } = useDarkMode();

  return (
    <tr
      className={`border-b cursor-pointer ${
        isDarkMode ? "border-gray-600" : "border-gray-200"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: hoverColor,
        color: isDarkMode ? "#e5e7eb" : "#374151",
      }}
    >
      <td
        className={`py-2 px-4 hover:text-white ${
          isDarkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {event}
      </td>
    </tr>
  );
};

export default CriticalEventRow;
