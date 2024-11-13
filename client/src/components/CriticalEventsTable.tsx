import { useCriticalEventsTable } from "../hooks/useCriticalEventsTable";
import NoResultsFound from "./NoResultsFound";
import { CriticalEventTableHeader } from "./CriticalEventTableHeader";
import Spinner from "./Spinner";
import CriticalEventsPagination from "./CriticalEventsPagination";
import { useDarkMode } from "../hooks/useDarKMode";
import FileNameModal from "./modal/FileNameModal";
import ExportButton from "./ExportButton";
import CriticalEventsTableContent from "./CriticalEventsTableContent";
import TableHeaderControls from "./TableHeaderControls";

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

  const { isDarkMode } = useDarkMode();

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

          <CriticalEventsTableContent
            criticalEvents={criticalEvents}
            isDarkMode={isDarkMode}
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
