import { useState } from "react";
import { getRandomColor } from "../utils/utils";

const useCriticalEventRow = () => {
  const [hoverColor, setHoverColor] = useState<string>("");

  const handleMouseEnter = () => {
    setHoverColor(getRandomColor());
  };

  const handleMouseLeave = () => {
    setHoverColor("");
  };

  return { handleMouseEnter, handleMouseLeave, hoverColor };
};

export default useCriticalEventRow;
