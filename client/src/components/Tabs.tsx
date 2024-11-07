import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setActiveTab } from "../features/tabSlice";
import { useDarkMode } from "../hooks/useDarKMode";

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
        Table
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
        Graphs
      </div>
    </div>
  );
};

export default Tabs;
