import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  setDaysInput,
  addDays,
  resetCriticalEvents,
  setFilePropertiesNull,
} from "../features/criticalEvents/criticalEventsSlice";

export const useDaysInput = () => {
  const dispatch = useAppDispatch();
  const daysInput = useAppSelector((state) => state.criticalEvents.daysInput);

  const handleInputChange = (value: string) => {
    dispatch(setDaysInput(value));
  };

  const handleAddDays = () => {
    dispatch(addDays());
    dispatch(resetCriticalEvents());
    dispatch(setFilePropertiesNull());
  };

  return {
    daysInput,
    handleInputChange,
    handleAddDays,
  };
};
