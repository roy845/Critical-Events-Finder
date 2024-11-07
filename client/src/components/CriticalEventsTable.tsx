import CriticalEventsHeader from "./CriticalEventsHeader";
import CriticalEventRow from "./CriticalEventRow";
import { useCriticalEventsTable } from "../hooks/useCriticalEventsTable";
import NoResultsFound from "./NoResultsFound";
import { CriticalEventTableHeader } from "./CriticalEventTableHeader";
import SearchCriticalEvents from "./SearchCriticalEvents";
import Spinner from "./Spinner";
import SortCriticalEvents from "./SortCriticalEvents";
import CriticalEventsPagination from "./CriticalEventsPagination";
import ItemsPerPage from "./ItemsPerPage";
import { useDarkMode } from "../hooks/useDarKMode";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import Tooltip from "./Tooltip";
import FileNameModal from "./modal/FileNameModal";

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
        <div className="flex gap-4">
          <SearchCriticalEvents />
          <SortCriticalEvents />
          <ItemsPerPage />
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
          <ItemsPerPage />
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
            <ItemsPerPage />
          </div>

          <Tooltip message="Export the table data to an Excel file">
            <PiMicrosoftExcelLogoFill
              size={50}
              onClick={handleExportClick}
              className="cursor-pointer"
            />
          </Tooltip>

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
