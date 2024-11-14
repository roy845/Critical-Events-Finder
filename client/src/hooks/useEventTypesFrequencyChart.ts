import { useAppSelector } from "../app/hooks";
import { Day, DayEvent } from "../types/types";

const useEventTypesFrequencyChart = () => {
  const { daysList } = useAppSelector((state) => state.criticalEvents);

  const eventTypes: Record<string, number> = {};

  daysList.days_list.forEach((day: Day) =>
    day.events.forEach((event: DayEvent) => {
      eventTypes[event.event] = (eventTypes[event.event] || 0) + 1;
    })
  );

  const data = {
    labels: Object.keys(eventTypes),
    datasets: [
      {
        label: "Frequency",
        data: Object.values(eventTypes),
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

  return { data, options };
};

export default useEventTypesFrequencyChart;
