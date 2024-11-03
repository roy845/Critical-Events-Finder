import { useAppSelector } from "../app/hooks";
import { selectPaginatedCriticalEvents } from "../features/criticalEvents/criticalEventsSlice";

export const useCriticalEventsTable = () => {
  const { isTyping, searchCriticalEvents } = useAppSelector(
    (state) => state.criticalEvents
  );

  const criticalEvents: string[] = useAppSelector(
    selectPaginatedCriticalEvents
  );

  const hasCriticalEvents: boolean = criticalEvents.length > 0;

  return { criticalEvents, hasCriticalEvents, isTyping, searchCriticalEvents };
};
