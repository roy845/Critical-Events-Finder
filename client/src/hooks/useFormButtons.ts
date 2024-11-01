import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { resetForm } from "../features/criticalEvents/criticalEventsSlice";

export const useFormButtons = (
  fileInputRef: React.RefObject<HTMLInputElement>
) => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector(
    (state: RootState) => state.criticalEvents
  );

  const handleReset = () => {
    dispatch(resetForm());

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    toast.info("Form has been reset.");
  };

  return { loading, handleReset };
};
