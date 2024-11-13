import CriticalEventsHeader from "./CriticalEventsHeader";
import CriticalEventRow from "./CriticalEventRow";

interface CriticalEventsTableContentProps {
  criticalEvents: string[];
  isDarkMode: boolean;
}

const CriticalEventsTableContent = ({
  criticalEvents,
  isDarkMode,
}: CriticalEventsTableContentProps) => (
  <table
    className={`min-w-full border rounded-lg shadow-md ${
      isDarkMode
        ? "bg-gray-800 border-gray-700 text-gray-300"
        : "bg-white border-gray-200 text-gray-900"
    }`}
  >
    <CriticalEventsHeader title="Event Name" />
    <tbody>
      {criticalEvents.map((event: string) => (
        <CriticalEventRow key={event} event={event} />
      ))}
    </tbody>
  </table>
);

export default CriticalEventsTableContent;
