import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import {
  setCurrentPageDaysList,
  setItemsPerPageDaysList,
} from "../features/criticalEvents/criticalEventsSlice";

const useItemsPerPageDaysList = () => {
  const dispatch = useAppDispatch();
  const itemsPerPage = useAppSelector(
    (state: RootState) => state.criticalEvents.itemsPerPageDaysList
  );

  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value =
      event.target.value === "all"
        ? Infinity
        : parseInt(event.target.value, 10);
    dispatch(setItemsPerPageDaysList(value));
    dispatch(setCurrentPageDaysList(1));
  };

  return {
    itemsPerPage,
    handleItemsPerPageChange,
  };
};

export default useItemsPerPageDaysList;
