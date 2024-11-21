import { useState } from "react";
import { useAppSelector } from "../app/hooks";
import { useDarkMode } from "./useDarKMode";

const useIntersectionFrequencyChart = () => {
  const { isDarkMode } = useDarkMode();
  const [sortType, setSortType] = useState<"frequency" | "name">("frequency");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "none">("none");
  const { daysList } = useAppSelector((state) => state.criticalEvents);

  const intersections: Record<string, number> = {};

  daysList.days_list.forEach((day) =>
    day.events.forEach((event) => {
      intersections[event.intersection] =
        (intersections[event.intersection] || 0) + 1;
    })
  );

  let sortedIntersections = Object.entries(intersections);

  if (sortType === "frequency") {
    if (sortOrder === "asc") {
      sortedIntersections.sort((a, b) => a[1] - b[1]);
    } else if (sortOrder === "desc") {
      sortedIntersections.sort((a, b) => b[1] - a[1]);
    }
  } else if (sortType === "name") {
    if (sortOrder === "asc") {
      sortedIntersections.sort((a, b) => a[0].localeCompare(b[0]));
    } else if (sortOrder === "desc") {
      sortedIntersections.sort((a, b) => b[0].localeCompare(a[0]));
    }
  }

  const data = {
    labels: sortedIntersections.map(([intersection]) => intersection),
    datasets: [
      {
        label: "Frequency",
        data: sortedIntersections.map(([, frequency]) => frequency),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Intersection Frequency Chart",
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

export default useIntersectionFrequencyChart;
