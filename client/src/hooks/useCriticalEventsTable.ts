import { useAppSelector } from "../app/hooks";

export const useCriticalEventsTable = () => {
  const criticalEvents: string[] = useAppSelector(
    (state) => state.criticalEvents.criticalEvents
  );

  const hasCriticalEvents: boolean = criticalEvents.length > 0;

  return { criticalEvents, hasCriticalEvents };
};
