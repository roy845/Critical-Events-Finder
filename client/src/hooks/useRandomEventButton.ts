import { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { Utils } from "../utils/utils";
import {
  generateRandomDaysList,
  resetCriticalEvents,
  setFilePropertiesNull,
} from "../features/criticalEvents/criticalEventsSlice";

const useRandomEventButton = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [buttonColor, setButtonColor] = useState(Utils.getRandomColor());

  const dispatch = useAppDispatch();

  const generateRandomDaysListWithEvents = () => {
    dispatch(resetCriticalEvents());
    dispatch(setFilePropertiesNull());
    dispatch(generateRandomDaysList());
  };

  const handleClick = () => {
    generateRandomDaysListWithEvents();
    setButtonColor(Utils.getRandomColor());
    setIsSpinning(true);

    setTimeout(() => setIsSpinning(false), 1000);
  };
  return { isSpinning, buttonColor, setButtonColor, handleClick };
};

export default useRandomEventButton;
