import CriticalEventsHeader from "./CriticalEventsHeader";
import CriticalEventRow from "./CriticalEventRow";
import { useCriticalEventsTable } from "../hooks/useCriticalEventsTable";
import NoResultsFound from "./NoResultsFound";
import { CriticalEventTableHeader } from "./CriticalEventTableHeader";
import SearchCriticalEvents from "./SearchCriticalEvents";
import Spinner from "./Spinner";
import SortCriticalEvents from "./SortCriticalEvents";

const CriticalEventsTable = () => {
  const { criticalEvents, hasCriticalEvents, searchCriticalEvents, isTyping } =
    useCriticalEventsTable();

  if (isTyping) {
    return (
      <div className="mt-4">
        <CriticalEventTableHeader title="Critical Events" />
        <div className="flex gap-4">
          <SearchCriticalEvents />
          <SortCriticalEvents />
        </div>
        <Spinner />
      </div>
    );
  }

  if (!hasCriticalEvents && searchCriticalEvents.trim() !== "" && !isTyping)
    return (
      <div className="mt-4">
        <CriticalEventTableHeader title="Critical Events" />
        <div className="flex gap-4">
          <SearchCriticalEvents />
          <SortCriticalEvents />
        </div>

        <NoResultsFound />
      </div>
    );

  return (
    <div className="mt-4">
      {hasCriticalEvents && (
        <>
          <CriticalEventTableHeader title="Critical Events" />
          <div className="flex gap-4">
            <SearchCriticalEvents />
            <SortCriticalEvents />
          </div>
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <CriticalEventsHeader title="Event Name" />
            <tbody>
              {criticalEvents.map((event: string, _) => (
                <CriticalEventRow key={event} event={event} />
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default CriticalEventsTable;
