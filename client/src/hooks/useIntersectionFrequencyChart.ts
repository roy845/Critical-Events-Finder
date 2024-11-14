import { useAppSelector } from "../app/hooks";

const useIntersectionFrequencyChart = () => {
  const { daysList } = useAppSelector((state) => state.criticalEvents);

  const intersections: Record<string, number> = {};
  daysList.days_list.forEach((day) =>
    day.events.forEach((event) => {
      intersections[event.intersection] =
        (intersections[event.intersection] || 0) + 1;
    })
  );

  const data = {
    labels: Object.keys(intersections),
    datasets: [
      {
        label: "Frequency",
        data: Object.values(intersections),
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

  return { data, options };
};

export default useIntersectionFrequencyChart;
