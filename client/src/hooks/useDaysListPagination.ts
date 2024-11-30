import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import {
  selectDaysTotalPages,
  setCurrentPageDaysList,
} from "../features/criticalEvents/criticalEventsSlice";

const useDaysListPagination = () => {
  const dispatch = useAppDispatch();
  const totalPages: number = useAppSelector(selectDaysTotalPages);
  const currentPage: number = useAppSelector(
    (state: RootState) => state.criticalEvents.currentPageDaysList
  );

  const handlePageChange = (page: number): void => {
    if (page > 0 && page <= totalPages) {
      dispatch(setCurrentPageDaysList(page));
    }
  };
  return {
    totalPages,
    currentPage,
    handlePageChange,
  };
};

export default useDaysListPagination;
