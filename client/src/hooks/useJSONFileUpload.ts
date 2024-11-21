import React, { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { toast } from "react-toastify";
import { Day } from "../types/types";
import {
  resetCriticalEvents,
  setDaysInput,
  setDaysList,
  setFileProperties,
  setIsGlowing,
} from "../features/criticalEvents/criticalEventsSlice";
import { useDarkMode } from "./useDarKMode";

const useJSONFileUpload = (
  JSONfileInputRef: React.RefObject<HTMLInputElement>
) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const { isDarkMode } = useDarkMode();

  const spinnerColor: string = isDarkMode ? "#ffffff" : "blue";

  const handleFileUpload = (file: File | undefined) => {
    if (!file) {
      toast.error("No file is selected.");
      return;
    }

    const validExtensions: string[] = ["json"];
    const fileExtension: string | undefined = file.name
      .split(".")
      .pop()
      ?.toLowerCase();

    if (!fileExtension || !validExtensions.includes(fileExtension)) {
      toast.error("Please upload a valid JSON file.");
      return;
    }

    if (JSONfileInputRef.current) {
      JSONfileInputRef.current.value = "";
    }

    setLoading(true);

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target?.result as string);

        const importedDaysList: Day[] = data.map((item: any) => ({
          id: item.id,
          events: item.events.map((event: any) => ({
            intersection: event.intersection,
            event: event.event,
          })),
        }));

        dispatch(setDaysList({ days_list: importedDaysList }));
        dispatch(resetCriticalEvents());
        toast.success("Data imported successfully from JSON!");

        setLoading(false);
        dispatch(
          setFileProperties({
            name: file.name,
            size: file.size,
            type: file.type,
            lastModified: file.lastModified,
          })
        );
        dispatch(setDaysInput(""));
        dispatch(setIsGlowing(true));
        toast.success(`Uploaded file: ${file.name}`);
      } catch (error) {
        toast.error("Failed to parse JSON file.");
        setLoading(false);
      }
    };

    reader.readAsText(file);
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    handleFileUpload(file);
  };

  return { onFileChange, loading, isDarkMode, spinnerColor };
};

export default useJSONFileUpload;
