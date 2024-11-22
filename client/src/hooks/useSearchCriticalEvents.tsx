import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import useDebounce from "./useDebounce";
import {
  setCurrentPage,
  setIsTyping,
  setSearchCriticalEvents,
} from "../features/criticalEvents/criticalEventsSlice";
import { trie } from "../utils/initTrie";

const useSearchCriticalEvents = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const searchCriticalEvents = useAppSelector(
    (state) => state.criticalEvents.searchCriticalEvents
  );

  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState<string>(searchCriticalEvents);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setSuggestions]);

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

    if (e.target.value.trim()) {
      setSuggestions(trie.search(e.target.value));
    } else {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    debouncedDispatch(inputValue);
  }, [inputValue, debouncedDispatch]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputValue]);

  return {
    inputValue,
    handleChange,
    inputRef,
    containerRef,
    suggestions,
    setInputValue,
    setSuggestions,
  };
};

export default useSearchCriticalEvents;
