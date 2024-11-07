import { useAppSelector } from "../app/hooks";
import { selectPaginatedCriticalEvents } from "../features/criticalEvents/criticalEventsSlice";
import * as XLSX from "xlsx";

export const useCriticalEventsTable = () => {
  const { isTyping, searchCriticalEvents } = useAppSelector(
    (state) => state.criticalEvents
  );

  const criticalEvents: string[] = useAppSelector(
    selectPaginatedCriticalEvents
  );

  const hasCriticalEvents: boolean = criticalEvents.length > 0;

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      criticalEvents.map((event) => ({ Event: event }))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "CriticalEvents");

    XLSX.writeFile(workbook, "CriticalEvents.xlsx");
  };

  return {
    criticalEvents,
    hasCriticalEvents,
    isTyping,
    searchCriticalEvents,
    exportToExcel,
  };
};
