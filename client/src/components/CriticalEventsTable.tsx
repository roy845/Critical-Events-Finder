import CriticalEventsHeader from "./CriticalEventsHeader";
import CriticalEventRow from "./CriticalEventRow";
import { CriticalEventTableHeader } from "./CriticalEventTableHeader";
import { useCriticalEventsTable } from "../hooks/useCriticalEventsTable";

const CriticalEventsTable = () => {
  const { criticalEvents, hasCriticalEvents } = useCriticalEventsTable();

  if (!hasCriticalEvents) return null;

  return (
    <div className="mt-8">
      <CriticalEventTableHeader title="Critical Events" />
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <CriticalEventsHeader title="Event Name" />
        <tbody>
          {criticalEvents.map((event: string, _) => (
            <CriticalEventRow key={event} event={event} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CriticalEventsTable;
