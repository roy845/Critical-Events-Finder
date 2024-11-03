import useCriticalEventRow from "../hooks/useCriticalEventRow";

interface CriticalEventRowProps {
  event: string;
}

const CriticalEventRow = ({ event }: CriticalEventRowProps) => {
  const { handleMouseEnter, handleMouseLeave, hoverColor } =
    useCriticalEventRow();

  return (
    <tr
      className="border-b border-gray-200 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundColor: hoverColor }}
    >
      <td className="py-2 px-4 text-gray-700 hover:text-white">{event}</td>
    </tr>
  );
};

export default CriticalEventRow;
