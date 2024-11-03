import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import {
  selectTotalPages,
  setCurrentPage,
} from "../features/criticalEvents/criticalEventsSlice";

const useCriticalEventsPagination = () => {
  const dispatch = useAppDispatch();
  const totalPages: number = useAppSelector(selectTotalPages);
  const currentPage: number = useAppSelector(
    (state: RootState) => state.criticalEvents.currentPage
  );

  const handlePageChange = (page: number): void => {
    if (page > 0 && page <= totalPages) {
      dispatch(setCurrentPage(page));
    }
  };
  return {
    totalPages,
    currentPage,
    handlePageChange,
  };
};

export default useCriticalEventsPagination;
