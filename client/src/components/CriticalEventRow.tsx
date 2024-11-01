interface CriticalEventRowProps {
  event: string;
}

const CriticalEventRow = ({ event }: CriticalEventRowProps) => (
  <tr className="border-b border-gray-200">
    <td className="py-2 px-4 text-gray-700">{event}</td>
  </tr>
);

export default CriticalEventRow;
