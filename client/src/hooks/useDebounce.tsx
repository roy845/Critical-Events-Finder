import { useRef, useCallback } from "react";

const useDebounce = (
  func: (...args: any[]) => void,
  delay: number
): ((...args: any[]) => void) => {
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const debouncedFunction = useCallback(
    (...args: any[]) => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
      debounceTimeout.current = setTimeout(() => {
        func(...args);
      }, delay);
    },
    [func, delay]
  );

  return debouncedFunction;
};

export default useDebounce;
