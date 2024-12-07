import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import {
  selectGroupedCriticalEventsTotalPages,
  setCurrentPageGroupedCriticalEvents,
} from "../features/criticalEvents/criticalEventsSlice";

const useGroupedCriticalEventsPagination = () => {
  const dispatch = useAppDispatch();
  const totalPages: number = useAppSelector(
    selectGroupedCriticalEventsTotalPages
  );
  const currentPage: number = useAppSelector(
    (state: RootState) => state.criticalEvents.currentPageGroupedCriticalEvents
  );

  const handlePageChange = (page: number): void => {
    if (page > 0 && page <= totalPages) {
      dispatch(setCurrentPageGroupedCriticalEvents(page));
    }
  };
  return {
    totalPages,
    currentPage,
    handlePageChange,
  };
};

export default useGroupedCriticalEventsPagination;
