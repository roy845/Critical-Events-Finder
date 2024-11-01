// useCriticalEventsForm.ts
import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchCriticalEvents } from "../features/criticalEvents/criticalEventsSlice";
import { DayEvent } from "../types/types";

export const useCriticalEventsForm = () => {
  const dispatch = useAppDispatch();
  const { daysList, criticalEvents } = useAppSelector(
    (state) => state.criticalEvents
  );

  const fileInputRef: React.RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    const payload: {
      days_list: DayEvent[][];
    } = { days_list: daysList.days_list.map((day) => day.events) };
    await dispatch(fetchCriticalEvents(payload.days_list));
  };

  return {
    daysList,
    criticalEvents,
    fileInputRef,
    handleSubmit,
  };
};
