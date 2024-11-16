import { useState } from "react";
import { Utils } from "../utils/utils";

const useCriticalEventRow = () => {
  const [hoverColor, setHoverColor] = useState<string>("");

  const handleMouseEnter = () => {
    setHoverColor(Utils.getRandomColor());
  };

  const handleMouseLeave = () => {
    setHoverColor("");
  };

  return { handleMouseEnter, handleMouseLeave, hoverColor };
};

export default useCriticalEventRow;
