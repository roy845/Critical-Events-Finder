import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  setDaysInput,
  addDays,
} from "../features/criticalEvents/criticalEventsSlice";

export const useDaysInput = () => {
  const dispatch = useAppDispatch();
  const daysInput = useAppSelector((state) => state.criticalEvents.daysInput);

  const handleInputChange = (value: string) => {
    dispatch(setDaysInput(value));
  };

  const handleAddDays = () => {
    dispatch(addDays());
  };

  return {
    daysInput,
    handleInputChange,
    handleAddDays,
  };
};
