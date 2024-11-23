import { useState, useEffect } from "react";
import { useDarkMode } from "../hooks/useDarKMode";

const useClock = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const timer: NodeJS.Timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return { currentTime, isDarkMode };
};

export default useClock;
