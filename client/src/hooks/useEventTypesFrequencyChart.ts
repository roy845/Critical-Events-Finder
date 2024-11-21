import { useState } from "react";
import { useAppSelector } from "../app/hooks";
import { Day, DayEvent } from "../types/types";
import { useDarkMode } from "./useDarKMode";

const useEventTypesFrequencyChart = () => {
  const { isDarkMode } = useDarkMode();
  const [sortType, setSortType] = useState<"frequency" | "name">("frequency");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "none">("none");
  const { daysList } = useAppSelector((state) => state.criticalEvents);

  const eventTypes: Record<string, number> = {};

  daysList.days_list.forEach((day: Day) =>
    day.events.forEach((event: DayEvent) => {
      eventTypes[event.event] = (eventTypes[event.event] || 0) + 1;
    })
  );

  let sortedEventTypes = Object.entries(eventTypes);

  if (sortType === "frequency") {
    if (sortOrder === "asc") {
      sortedEventTypes.sort((a, b) => a[1] - b[1]);
    } else if (sortOrder === "desc") {
      sortedEventTypes.sort((a, b) => b[1] - a[1]);
    }
  } else if (sortType === "name") {
    if (sortOrder === "asc") {
      sortedEventTypes.sort((a, b) => a[0].localeCompare(b[0]));
    } else if (sortOrder === "desc") {
      sortedEventTypes.sort((a, b) => b[0].localeCompare(a[0]));
    }
  }

  const data = {
    labels: sortedEventTypes.map(([event]) => event),
    datasets: [
      {
        label: "Frequency",
        data: sortedEventTypes.map(([, frequency]) => frequency),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Event Types Frequency",
      },
    },
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value as "asc" | "desc" | "none");
  };

  const handleSortTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSortType(event.target.value as "frequency" | "name");
  };

  return {
    data,
    options,
    sortOrder,
    sortType,
    isDarkMode,
    handleSortChange,
    handleSortTypeChange,
  };
};

export default useEventTypesFrequencyChart;
