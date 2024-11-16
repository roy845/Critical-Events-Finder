import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import useGraphs from "../hooks/useGraphs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Graphs: React.FC = () => {
  const { chartData, chartOptions } = useGraphs();

  return (
    <>
      <h2 className="text-center text-xl mb-4">Graphs Section</h2>
      <Bar data={chartData} options={chartOptions} className="cursor-pointer" />
    </>
  );
};

export default Graphs;
