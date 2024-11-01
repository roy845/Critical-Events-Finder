import { useAppDispatch } from "../app/hooks";
import {
  addEvent,
  removeDay,
  removeLastEvent,
  updateEventField,
} from "../features/criticalEvents/criticalEventsSlice";
import { Day } from "../types/types";

export const useDayCard = (day: Day) => {
  const dispatch = useAppDispatch();

  const handleAddEvent = () => {
    dispatch(addEvent(day.id));
  };

  const handleRemoveLastEvent = () => {
    dispatch(removeLastEvent(day.id));
  };

  const handleRemoveDay = () => {
    dispatch(removeDay(day.id));
  };

  const handleUpdateEventField = (
    eventIndex: number,
    field: "intersection" | "event",
    value: string
  ) => {
    dispatch(
      updateEventField({
        dayId: day.id,
        eventIndex,
        field,
        value,
      })
    );
  };

  return {
    handleAddEvent,
    handleRemoveLastEvent,
    handleRemoveDay,
    handleUpdateEventField,
  };
};
