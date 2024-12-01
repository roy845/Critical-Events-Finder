import { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  fetchCriticalEvents,
  selectPaginatedCriticalEvents,
  selectPaginatedDaysList,
  setIsGlowing,
  setRequestDuration,
} from "../features/criticalEvents/criticalEventsSlice";
import { DayEvent, DurationUnit } from "../types/types";

export const useCriticalEventsForm = () => {
  const dispatch = useAppDispatch();
  const criticalEvents = useAppSelector(selectPaginatedCriticalEvents);

  const [durationUnit, setDurationUnit] = useState<DurationUnit>("ms");
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const { daysList, fileProperties, requestDuration } = useAppSelector(
    (state) => state.criticalEvents
  );

  const paginatedDaysList = useAppSelector(selectPaginatedDaysList);

  const fileInputRef: React.RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null);

  const JSONfileInputRef: React.RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null);

  const displayedDuration: string =
    durationUnit === "s"
      ? `${(Number(requestDuration) / 1000).toFixed(2)} seconds`
      : `${requestDuration} ms`;

  const handleDurationUnitChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setDurationUnit(e.target.value as DurationUnit);
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    const startTime: number = performance.now();

    const payload: {
      days_list: DayEvent[][];
    } = { days_list: daysList.days_list.map((day) => day.events) };
    await dispatch(fetchCriticalEvents(payload.days_list));
    dispatch(setIsGlowing(false));

    const endTime: number = performance.now();

    dispatch(setRequestDuration(+(endTime - startTime).toFixed(2)));
  };

  return {
    activeSlide,
    setActiveSlide,
    durationUnit,
    displayedDuration,
    handleDurationUnitChange,
    requestDuration,
    daysList,
    paginatedDaysList,
    fileProperties,
    criticalEvents,
    fileInputRef,
    JSONfileInputRef,
    handleSubmit,
  };
};
