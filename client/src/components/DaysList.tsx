import { useDarkMode } from "../hooks/useDarKMode";
import { Day } from "../types/types";
import DayCard from "./DayCard";

interface DaysListProps {
  daysList: Day[];
}

const DaysList = ({ daysList }: DaysListProps) => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      {daysList.map((day: Day, index: number) => (
        <DayCard key={day.id} day={day} index={index} />
      ))}
    </div>
  );
};

export default DaysList;
