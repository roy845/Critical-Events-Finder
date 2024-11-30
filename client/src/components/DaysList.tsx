import { useAppSelector } from "../app/hooks";
import { useDarkMode } from "../hooks/useDarKMode";
import { Day } from "../types/types";
import DayCard from "./DayCard";

interface DaysListProps {
  daysList: Day[];
}

const DaysList = ({ daysList }: DaysListProps) => {
  const { isDarkMode } = useDarkMode();

  const { currentPageDaysList, itemsPerPageDaysList } = useAppSelector(
    (state) => state.criticalEvents
  );

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      {daysList.map((day, localIndex) => {
        const globalIndex: number =
          itemsPerPageDaysList === Infinity
            ? localIndex
            : (currentPageDaysList - 1) * itemsPerPageDaysList + localIndex;
        return <DayCard key={globalIndex} day={day} index={globalIndex} />;
      })}
    </div>
  );
};

export default DaysList;
