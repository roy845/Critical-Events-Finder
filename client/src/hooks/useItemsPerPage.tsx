import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import {
  setCurrentPage,
  setItemsPerPage,
} from "../features/criticalEvents/criticalEventsSlice";

const useItemsPerPage = () => {
  const dispatch = useAppDispatch();
  const itemsPerPage = useAppSelector(
    (state: RootState) => state.criticalEvents.itemsPerPage
  );

  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value =
      event.target.value === "all"
        ? Infinity
        : parseInt(event.target.value, 10);
    dispatch(setItemsPerPage(value));
    dispatch(setCurrentPage(1));
  };

  return {
    itemsPerPage,
    handleItemsPerPageChange,
  };
};

export default useItemsPerPage;
