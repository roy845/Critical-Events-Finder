import { useAppSelector } from "../app/hooks";
import { selectFilteredCriticalEvents } from "../features/criticalEvents/criticalEventsSlice";

export const useCriticalEventsTable = () => {
  const { isTyping, searchCriticalEvents } = useAppSelector(
    (state) => state.criticalEvents
  );

  const criticalEvents: string[] = useAppSelector(selectFilteredCriticalEvents);

  const hasCriticalEvents: boolean = criticalEvents.length > 0;

  return { criticalEvents, hasCriticalEvents, isTyping, searchCriticalEvents };
};
