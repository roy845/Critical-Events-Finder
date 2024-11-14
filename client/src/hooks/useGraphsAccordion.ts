import { useState } from "react";
import { useDarkMode } from "./useDarKMode";

const useGraphsAccordion = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { isDarkMode } = useDarkMode();

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return { isOpen, isDarkMode, toggleAccordion };
};

export default useGraphsAccordion;
