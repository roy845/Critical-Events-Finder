import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import useDebounce from "./useDebounce";
import {
  setCurrentPage,
  setIsTyping,
  setSearchCriticalEvents,
} from "../features/criticalEvents/criticalEventsSlice";

const useSearchCriticalEvents = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const searchCriticalEvents = useAppSelector(
    (state) => state.criticalEvents.searchCriticalEvents
  );

  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState<string>(searchCriticalEvents);

  const debouncedDispatch: (...args: any[]) => void = useDebounce(
    (value: string) => {
      dispatch(setSearchCriticalEvents(value));
      dispatch(setIsTyping(false));
    },
    500
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
    dispatch(setIsTyping(true));
    dispatch(setCurrentPage(1));
  };

  useEffect(() => {
    debouncedDispatch(inputValue);
  }, [inputValue, debouncedDispatch]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputValue]);

  return { inputValue, handleChange, inputRef };
};

export default useSearchCriticalEvents;
