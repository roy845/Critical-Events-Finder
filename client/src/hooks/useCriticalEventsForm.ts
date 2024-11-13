import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  fetchCriticalEvents,
  selectPaginatedCriticalEvents,
} from "../features/criticalEvents/criticalEventsSlice";
import { DayEvent } from "../types/types";

export const useCriticalEventsForm = () => {
  const dispatch = useAppDispatch();
  const criticalEvents = useAppSelector(selectPaginatedCriticalEvents);

  const { daysList, fileProperties } = useAppSelector(
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
    fileProperties,
    criticalEvents,
    fileInputRef,
    handleSubmit,
  };
};
