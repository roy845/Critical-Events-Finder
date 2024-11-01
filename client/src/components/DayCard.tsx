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

  return (
    <div className="relative">
      <div className="p-4 border border-gray-200 rounded-md space-y-4 bg-gray-50">
        <h3 className="text-lg font-medium text-gray-700">Day {index + 1}</h3>
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
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Event"
              value={event.event}
              onChange={(e) =>
                handleUpdateEventField(eventIndex, "event", e.target.value)
              }
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddEvent}
          className="text-blue-600 hover:text-blue-800 text-sm mt-2"
        >
          + Add Event
        </button>
        {day.events.length > 0 && (
          <button
            type="button"
            onClick={handleRemoveLastEvent}
            className="text-red-600 hover:text-red-800 text-sm mt-2"
          >
            - Remove Last Event
          </button>
        )}
        <button
          type="button"
          onClick={handleRemoveDay}
          className="w-full mt-2 text-red-600 hover:text-red-800 text-xs"
        >
          - Remove Day
        </button>
      </div>
    </div>
  );
};

export default DayCard;
