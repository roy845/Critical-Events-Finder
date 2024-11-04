import { useAppDispatch } from "../app/hooks";
import { setDaysList } from "../features/criticalEvents/criticalEventsSlice";
import { toast } from "react-toastify";
import * as XLSX from "xlsx";
import { Day } from "../types/types";

export const useFileUpload = () => {
  const dispatch = useAppDispatch();

  const handleFileUpload = (file: File | undefined) => {
    if (!file) {
      toast.error("No file is selected.");
      return;
    }

    const validExtensions: string[] = ["xlsx", "xls"];
    const fileExtension: string | undefined = file.name
      .split(".")
      .pop()
      ?.toLowerCase();

    if (!fileExtension || !validExtensions.includes(fileExtension)) {
      toast.error("Please upload a valid Excel file.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target?.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(sheet, {
        header: 1,
      }) as string[][];

      const importedDaysList: Day[] = json
        .slice(1)
        .reduce((days: Day[], row: string[]) => {
          const [dayIndex, intersection, event] = row;
          if (!dayIndex || !intersection || !event) return days;

          const dayId = `day-${dayIndex}`;
          const existingDay = days.find((d) => d.id === dayId);

          if (existingDay) {
            existingDay.events.push({ intersection, event });
          } else {
            days.push({
              id: dayId,
              events: [{ intersection, event }],
            });
          }
          return days;
        }, []);

      dispatch(setDaysList({ days_list: importedDaysList }));
      toast.success("Data imported successfully from Excel!");
    };

    reader.readAsArrayBuffer(file);
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    handleFileUpload(file);
  };

  return { onFileChange };
};
