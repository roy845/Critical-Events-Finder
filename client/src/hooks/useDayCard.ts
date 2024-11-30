import { useAppDispatch } from "../app/hooks";
import {
  addEvent,
  removeDay,
  removeLastEvent,
  setIsGlowing,
  setRequestDuration,
  updateEventField,
} from "../features/criticalEvents/criticalEventsSlice";
import { AllowedFieldType, Day } from "../types/types";

export const useDayCard = (day: Day) => {
  const dispatch = useAppDispatch();

  const handleAddEvent = () => {
    dispatch(addEvent(day.id));
    dispatch(setIsGlowing(true));
    dispatch(setRequestDuration(0));
  };

  const handleRemoveLastEvent = () => {
    dispatch(removeLastEvent(day.id));
    dispatch(setIsGlowing(true));
    dispatch(setRequestDuration(0));
  };

  const handleRemoveDay = () => {
    dispatch(removeDay(day.id));
    dispatch(setIsGlowing(true));
    dispatch(setRequestDuration(0));
  };

  const handleUpdateEventField = (
    eventIndex: number,
    field: AllowedFieldType,
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
