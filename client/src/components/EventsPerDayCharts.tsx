import { Bar } from "react-chartjs-2";
import useEventsPerDayCharts from "../hooks/useEventsPerDayCharts";

export default function EventsPerDayChart() {
  const { data, options } = useEventsPerDayCharts();

  return <Bar data={data} options={options} className="cursor-pointer" />;
}
