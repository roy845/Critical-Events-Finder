import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setActiveTab } from "../features/tabSlice";
import { useDarkMode } from "../hooks/useDarKMode";
import { CiViewTable } from "react-icons/ci";
import { FaChartBar } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";

const Tabs = () => {
  const dispatch = useAppDispatch();
  const activeTab = useAppSelector((state) => state.tabs.activeTab);
  const { isDarkMode } = useDarkMode();

  return (
    <div className="flex justify-center space-x-4 border-b border-gray-300 dark:border-gray-600 mb-6">
      <div
        onClick={() => dispatch(setActiveTab("table"))}
        className={`px-4 py-2 cursor-pointer ${
          activeTab === "table"
            ? "border-b-2 border-blue-500 text-blue-500"
            : isDarkMode
            ? "text-gray-300"
            : "text-gray-700"
        }`}
      >
        <span className="flex justify-center gap-4">
          {" "}
          Table
          <span className="mt-1">
            <CiViewTable />
          </span>
        </span>
      </div>
      <div
        onClick={() => dispatch(setActiveTab("graphs"))}
        className={`px-4 py-2 cursor-pointer ${
          activeTab === "graphs"
            ? "border-b-2 border-blue-500 text-blue-500"
            : isDarkMode
            ? "text-gray-300"
            : "text-gray-700"
        }`}
      >
        <span className="flex justify-center gap-4">
          {" "}
          Graphs
          <span className="mt-1">
            <FaChartBar />
          </span>
        </span>
      </div>

      <div
        onClick={() => dispatch(setActiveTab("groupByLetter"))}
        className={`px-4 py-2 cursor-pointer ${
          activeTab === "groupByLetter"
            ? "border-b-2 border-blue-500 text-blue-500"
            : isDarkMode
            ? "text-gray-300"
            : "text-gray-700"
        }`}
      >
        <span className="flex justify-center gap-4">
          Group by Letter
          <span className="mt-1">
            <FaLayerGroup />
          </span>
        </span>
      </div>
    </div>
  );
};

export default Tabs;
