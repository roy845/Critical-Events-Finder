import FormHeader from "./FormHeader";
import FileUpload from "./FileUpload";
import DaysInput from "./DaysInput";
import CriticalEventsTable from "./CriticalEventsTable";
import FormButtons from "./FormButtons";
import DaysList from "./DaysList";
import { useCriticalEventsForm } from "../hooks/useCriticalEventsForm";
import { useDarkMode } from "../hooks/useDarKMode";
import Graphs from "./Graphs";
import Tabs from "./Tabs";
import { useAppSelector } from "../app/hooks";

const CriticalEventsForm = () => {
  const { daysList, criticalEvents, fileInputRef, handleSubmit } =
    useCriticalEventsForm();
  const { isDarkMode } = useDarkMode();
  const { activeTab } = useAppSelector((state) => state.tabs);

  const { criticalEvents: allCriticalEvents } = useAppSelector(
    (state) => state.criticalEvents
  );

  const { searchCriticalEvents } = useAppSelector(
    (state) => state.criticalEvents
  );

  return (
    <div
      className={`max-w-4xl mx-auto p-6 shadow-lg rounded-lg mt-10 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <FormHeader title="Critical Events Form" />
      <DaysInput />
      <br />
      <div
        className={`text-center mb-2 ${
          isDarkMode ? "text-gray-400" : "text-gray-700"
        }`}
      >
        OR
      </div>
      <FileUpload fileInputRef={fileInputRef} />
      <br />
      <form onSubmit={handleSubmit} className="space-y-6">
        <DaysList daysList={daysList.days_list} />
        {(daysList.days_list.length > 0 || criticalEvents.length > 0) && (
          <FormButtons fileInputRef={fileInputRef} />
        )}
      </form>
      {criticalEvents.length === 0 && searchCriticalEvents.trim() !== "" && (
        <Tabs />
      )}
      {criticalEvents.length > 0 && <Tabs />}
      {activeTab === "table" ? (
        <CriticalEventsTable />
      ) : (
        allCriticalEvents.length > 0 && <Graphs />
      )}
    </div>
  );
};

export default CriticalEventsForm;
