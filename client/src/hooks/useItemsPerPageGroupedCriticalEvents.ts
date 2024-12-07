import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import {
  setCurrentPageGroupedCriticalEvents,
  setItemsPerPageGroupedCriticalEvents,
} from "../features/criticalEvents/criticalEventsSlice";

const useItemsPerPageGroupedCriticalEvents = () => {
  const dispatch = useAppDispatch();
  const itemsPerPage = useAppSelector(
    (state: RootState) => state.criticalEvents.itemsPerPageGroupedCriticalEvents
  );

  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value =
      event.target.value === "all"
        ? Infinity
        : parseInt(event.target.value, 10);
    dispatch(setItemsPerPageGroupedCriticalEvents(value));
    dispatch(setCurrentPageGroupedCriticalEvents(1));
  };

  return {
    itemsPerPage,
    handleItemsPerPageChange,
  };
};

export default useItemsPerPageGroupedCriticalEvents;
