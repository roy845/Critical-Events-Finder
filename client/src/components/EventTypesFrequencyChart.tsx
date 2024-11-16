import { Bar } from "react-chartjs-2";
import useEventTypesFrequencyChart from "../hooks/useEventTypesFrequencyChart";

export default function EventTypesFrequencyChart() {
  const { data, options } = useEventTypesFrequencyChart();
  return <Bar data={data} options={options} className="cursor-pointer" />;
}
