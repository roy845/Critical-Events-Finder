import { Bar } from "react-chartjs-2";
import useIntersectionFrequencyChart from "../hooks/useIntersectionFrequencyChart";

export default function IntersectionFrequencyChart() {
  const { data, options } = useIntersectionFrequencyChart();
  return <Bar data={data} options={options} className="cursor-pointer" />;
}
