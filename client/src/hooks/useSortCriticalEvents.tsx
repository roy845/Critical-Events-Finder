import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { setSortOrder } from "../features/criticalEvents/criticalEventsSlice";
import { SortOrder } from "../types/types";

const useSortCriticalEvents = () => {
  const dispatch = useAppDispatch();
  const sortOrder: SortOrder = useAppSelector(
    (state: RootState) => state.criticalEvents.sortOrder
  );

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOrder: SortOrder = e.target.value as "asc" | "desc" | null;
    dispatch(setSortOrder(selectedOrder));
  };

  return { sortOrder, handleSortChange };
};

export default useSortCriticalEvents;
