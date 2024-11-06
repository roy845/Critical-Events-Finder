import { useDarkMode } from "../hooks/useDarKMode";
import { useDayCard } from "../hooks/useDayCard";
import { Day, DayEvent } from "../types/types";

interface DayCardProps {
  day: Day;
  index: number;
}

const DayCard = ({ day, index }: DayCardProps) => {
  const {
    handleAddEvent,
    handleRemoveLastEvent,
    handleRemoveDay,
    handleUpdateEventField,
  } = useDayCard(day);
  const { isDarkMode } = useDarkMode();

  return (
    <div className="relative">
      <div
        className={`p-4 border rounded-md space-y-4 ${
          isDarkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-gray-50 border-gray-200"
        }`}
      >
        <h3
          className={`text-lg font-medium ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Day {index + 1}
        </h3>
        {day.events.map((event: DayEvent, eventIndex: number) => (
          <div key={eventIndex} className="flex gap-4">
            <input
              type="text"
              placeholder="Intersection"
              value={event.intersection}
              onChange={(e) =>
                handleUpdateEventField(
                  eventIndex,
                  "intersection",
                  e.target.value
                )
              }
              className={`w-full p-2 border rounded-md ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-gray-300"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
            />
            <input
              type="text"
              placeholder="Event"
              value={event.event}
              onChange={(e) =>
                handleUpdateEventField(eventIndex, "event", e.target.value)
              }
              className={`w-full p-2 border rounded-md ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-gray-300"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
            />
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddEvent}
          className={`text-sm mt-2 ${
            isDarkMode
              ? "text-blue-400 hover:text-blue-500"
              : "text-blue-600 hover:text-blue-800"
          }`}
        >
          + Add Event
        </button>
        {day.events.length > 0 && (
          <button
            type="button"
            onClick={handleRemoveLastEvent}
            className={`text-sm mt-2 ${
              isDarkMode
                ? "text-red-400 hover:text-red-500"
                : "text-red-600 hover:text-red-800"
            }`}
          >
            - Remove Last Event
          </button>
        )}
        <button
          type="button"
          onClick={handleRemoveDay}
          className={`w-full mt-2 text-xs ${
            isDarkMode
              ? "text-red-400 hover:text-red-500"
              : "text-red-600 hover:text-red-800"
          }`}
        >
          - Remove Day
        </button>
      </div>
    </div>
  );
};

export default DayCard;
