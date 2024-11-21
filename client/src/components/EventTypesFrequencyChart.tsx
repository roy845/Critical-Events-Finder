import { Bar } from "react-chartjs-2";
import useEventTypesFrequencyChart from "../hooks/useEventTypesFrequencyChart";
import SortEventTypes from "./SortEventTypes";
import SortBy from "./SortBy";

export default function EventTypesFrequencyChart() {
  const {
    data,
    options,
    sortOrder,
    sortType,
    isDarkMode,
    handleSortChange,
    handleSortTypeChange,
  } = useEventTypesFrequencyChart();

  return (
    <>
      <div className="flex items-center mb-4">
        <div className="mr-4">
          <label htmlFor="sortType" className="mr-2">
            Sort by:
          </label>
          <SortBy
            sortType={sortType}
            isDarkMode={isDarkMode}
            handleSortTypeChange={handleSortTypeChange}
          />
        </div>
        <div>
          <label htmlFor="sortOrder" className="mr-2">
            Order:
          </label>
          <SortEventTypes
            isDarkMode={isDarkMode}
            sortOrder={sortOrder}
            handleSortChange={handleSortChange}
          />
        </div>
      </div>
      <Bar data={data} options={options} className="cursor-pointer" />
    </>
  );
}
