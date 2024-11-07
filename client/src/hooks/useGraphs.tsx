import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";

const useGraphs = () => {
  const { criticalEvents } = useAppSelector(
    (state: RootState) => state.criticalEvents
  );

  const numberOfCriticalEvents: number = criticalEvents.length;

  const chartData = {
    labels: ["Critical Events"],
    datasets: [
      {
        label: "Number of Critical Events",
        data: [numberOfCriticalEvents],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Critical Events",
      },
    },
    scales: {
      x: {
        type: "category" as const,
        title: {
          display: true,
          text: "",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Count",
        },
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return {
    chartData,
    chartOptions,
  };
};

export default useGraphs;
