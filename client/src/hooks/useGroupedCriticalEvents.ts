import { useAppSelector, useAppDispatch } from "../app/hooks";
import { RootState } from "../app/store";
import {
  selectGroupedCriticalEvents,
  selectPaginatedGroupedCriticalEvents,
  setCurrentPageGroupedCriticalEvents,
  setSelectedLetter,
} from "../features/criticalEvents/criticalEventsSlice";

export const useGroupedCriticalEvents = () => {
  const dispatch = useAppDispatch();
  const groupedCriticalEvents = useAppSelector((state: RootState) =>
    selectPaginatedGroupedCriticalEvents(state)
  );

  const AllGroupedCriticalEvents = useAppSelector(selectGroupedCriticalEvents);

  const selectedLetter = useAppSelector(
    (state: RootState) => state.criticalEvents.selectedLetter
  );

  const availableLetters = Object.keys(AllGroupedCriticalEvents).sort();

  const handleLetterChange = (letter: string) => {
    dispatch(setSelectedLetter(letter));
    dispatch(setCurrentPageGroupedCriticalEvents(1));
  };

  return {
    availableLetters,
    selectedLetter,
    groupedCriticalEvents,
    handleLetterChange,
  };
};
