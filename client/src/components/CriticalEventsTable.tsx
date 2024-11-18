import { useCriticalEventsTable } from "../hooks/useCriticalEventsTable";
import NoResultsFound from "./NoResultsFound";
import { CriticalEventTableHeader } from "./CriticalEventTableHeader";
import Spinner from "./Spinner";
import CriticalEventsPagination from "./CriticalEventsPagination";
import FileNameModal from "./modal/FileNameModal";
import ExportButton from "./ExportButton";
import TableHeaderControls from "./TableHeaderControls";
import DataTable from "./DataTable";
import CriticalEventRow from "./CriticalEventRow";

const CriticalEventsTable = () => {
  const {
    criticalEvents,
    hasCriticalEvents,
    searchCriticalEvents,
    isTyping,
    isModalOpen,
    setIsModalOpen,
    handleExportClick,
    handleExportConfirm,
  } = useCriticalEventsTable();

  if (isTyping) {
    return (
      <div className="mt-4">
        <CriticalEventTableHeader title="Critical Events" />
        <TableHeaderControls />

        <Spinner />
      </div>
    );
  }

  if (!hasCriticalEvents && searchCriticalEvents.trim() !== "" && !isTyping)
    return (
      <div className="mt-4">
        <CriticalEventTableHeader title="Critical Events" />
        <TableHeaderControls />

        <NoResultsFound />
      </div>
    );

  return (
    <div className="mt-4">
      {hasCriticalEvents && (
        <>
          <CriticalEventTableHeader title="Critical Events" />
          <TableHeaderControls />

          <ExportButton onClick={handleExportClick} />

          <DataTable<string>
            items={criticalEvents}
            headers={["Event Name"]}
            numOfHeaders={1}
            renderRow={(event: string) => (
              <CriticalEventRow key={event} event={event} />
            )}
          />

          <CriticalEventsPagination />

          {isModalOpen && (
            <FileNameModal
              onConfirm={handleExportConfirm}
              onCancel={() => setIsModalOpen(false)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default CriticalEventsTable;
