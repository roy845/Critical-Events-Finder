import { useState } from "react";

const useAccordion = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return { isOpen, toggleAccordion };
};

export default useAccordion;
