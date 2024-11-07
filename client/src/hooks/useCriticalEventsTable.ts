import { useState } from "react";
import { useAppSelector } from "../app/hooks";
import { selectPaginatedCriticalEvents } from "../features/criticalEvents/criticalEventsSlice";
import * as XLSX from "xlsx";
import { toast } from "react-toastify";

export const useCriticalEventsTable = () => {
  const { isTyping, searchCriticalEvents } = useAppSelector(
    (state) => state.criticalEvents
  );

  const criticalEvents: string[] = useAppSelector(
    selectPaginatedCriticalEvents
  );

  const hasCriticalEvents: boolean = criticalEvents.length > 0;

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const exportToExcel = (fileName: string = "CriticalEvents") => {
    const worksheet = XLSX.utils.json_to_sheet(
      criticalEvents.map((event) => ({ Event: event }))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "CriticalEvents");

    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  const handleExportClick = () => {
    setIsModalOpen(true);
  };

  const handleExportConfirm = (fileName: string) => {
    exportToExcel(fileName);
    setIsModalOpen(false);
    toast.success("Data exported to Excel successfully");
  };

  return {
    criticalEvents,
    hasCriticalEvents,
    isTyping,
    searchCriticalEvents,
    exportToExcel,
    isModalOpen,
    handleExportClick,
    handleExportConfirm,
    setIsModalOpen,
  };
};
