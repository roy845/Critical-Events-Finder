import { useAppSelector } from "../app/hooks";
import { Day, DaysList } from "../types/types";

const useEventsPerDayCharts = () => {
  const daysList: DaysList = useAppSelector(
    (state) => state.criticalEvents.daysList
  );

  const data = {
    labels: daysList.days_list.map((_, index) => `day-${index + 1}`),
    datasets: [
      {
        label: "Number of Intersections / Events",
        data: daysList.days_list.map((day: Day) => day.events.length),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Intersections / Events Frequency per Day",
      },
    },
  };
  return { data, options };
};

export default useEventsPerDayCharts;
