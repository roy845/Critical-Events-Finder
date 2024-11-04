import { useState } from "react";

export const useConfirmResetModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [confirmText, setConfirmText] = useState<string>("");

  const openModal = (): void => setIsModalOpen(true);
  const closeModal = (): void => {
    setIsModalOpen(false);
    setConfirmText("");
  };

  const handleConfirmTextChange = (text: string): void => {
    setConfirmText(text);
  };

  const isConfirmEnabled: boolean = confirmText === "Reset Form";

  return {
    isModalOpen,
    confirmText,
    isConfirmEnabled,
    openModal,
    closeModal,
    handleConfirmTextChange,
  };
};
