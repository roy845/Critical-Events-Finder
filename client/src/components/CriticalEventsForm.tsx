import FormHeader from "./FormHeader";
import FileUpload from "./FileUpload";
import DaysInput from "./DaysInput";
import CriticalEventsTable from "./CriticalEventsTable";
import FormButtons from "./FormButtons";
import DaysList from "./DaysList";
import { useCriticalEventsForm } from "../hooks/useCriticalEventsForm";

const CriticalEventsForm = () => {
  const { daysList, criticalEvents, fileInputRef, handleSubmit } =
    useCriticalEventsForm();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <FormHeader title="Critical Events Form" />
      <DaysInput />
      <br />
      <div className="text-center mb-2">OR</div>
      <FileUpload fileInputRef={fileInputRef} />
      <br />
      <form onSubmit={handleSubmit} className="space-y-6">
        <DaysList daysList={daysList.days_list} />
        {(daysList.days_list.length > 0 || criticalEvents.length > 0) && (
          <FormButtons fileInputRef={fileInputRef} />
        )}
      </form>
      <CriticalEventsTable />
    </div>
  );
};

export default CriticalEventsForm;
