import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectModal } from "../features/modalSlice";
import { useDarkMode } from "./useDarKMode";

const useAppInfoModal = () => {
  const dispatch = useAppDispatch();
  const { isOpen, doNotShowAgain } = useAppSelector(selectModal);
  const { isDarkMode } = useDarkMode();
  return { isOpen, doNotShowAgain, isDarkMode, dispatch };
};

export default useAppInfoModal;
