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
import Accordion from "./Accordion";
import RandomEventButton from "./RandomEventButton";
import JSONFileUpload from "./JSONFileUpload";
import EventsPerDayChart from "./EventsPerDayCharts";
import EventTypesFrequencyChart from "./EventTypesFrequencyChart";
import GraphsAccordion from "./GraphsAccordion";
import IntersectionFrequencyChart from "./IntersectionFrequencyChart";
import DaysListPagination from "./DaysListPagination";
import ItemsPerPageDaysList from "./ItemsPerPageDaysList";
import DurationUnitSelect from "./DurationUnitSelect";

const CriticalEventsForm = () => {
  const {
    daysList,
    requestDuration,
    displayedDuration,
    paginatedDaysList,
    criticalEvents,
    fileProperties,
    fileInputRef,
    JSONfileInputRef,
    durationUnit,
    handleDurationUnitChange,
    handleSubmit,
  } = useCriticalEventsForm();
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
      <div
        className={`text-center mb-2 ${
          isDarkMode ? "text-gray-400" : "text-gray-700"
        }`}
      >
        OR
      </div>
      <JSONFileUpload fileInputRef={JSONfileInputRef} />
      <br />
      <div
        className={`text-center mb-2 ${
          isDarkMode ? "text-gray-400" : "text-gray-700"
        }`}
      >
        OR
      </div>
      <label
        className={`block font-medium mb-2 text-center ${
          isDarkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Generate Random Events
      </label>
      <div className={"text-center mb-2"}>
        <RandomEventButton />
      </div>

      {fileProperties && <Accordion file={fileProperties} />}
      {daysList.days_list.length > 0 && (
        <GraphsAccordion title="Intersections / Events Charts">
          <EventsPerDayChart />
          <EventTypesFrequencyChart />
          <IntersectionFrequencyChart />
        </GraphsAccordion>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        {paginatedDaysList.length > 0 && <ItemsPerPageDaysList />}
        <DaysList daysList={paginatedDaysList} />

        {paginatedDaysList.length > 0 && <DaysListPagination />}

        {(daysList.days_list.length > 0 || criticalEvents.length > 0) && (
          <>
            <FormButtons
              fileInputRef={fileInputRef}
              JSONFilInputRef={JSONfileInputRef}
            />
            {requestDuration.toString() !== "0" && (
              <DurationUnitSelect
                durationUnit={durationUnit}
                onChange={handleDurationUnitChange}
                isDarkMode={isDarkMode}
              />
            )}

            {durationUnit !== "none" && requestDuration.toString() !== "0" && (
              <p className="mt-2">{`Request completed in ${displayedDuration}`}</p>
            )}
          </>
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
