import { useFormButtons } from "../hooks/useFormButtons";
import { TailSpin } from "react-loader-spinner";
import { useConfirmResetModal } from "../hooks/useConfirmResetModal";
import ConfirmResetModal from "./modal/ConfirmResetModal";
import { useDarkMode } from "../hooks/useDarKMode";
import { GrPowerReset } from "react-icons/gr";
import { IoMdDownload } from "react-icons/io";

interface FileUploadProps {
  fileInputRef: React.RefObject<HTMLInputElement>;
  JSONFilInputRef: React.RefObject<HTMLInputElement>;
}

const FormButtons = ({ fileInputRef, JSONFilInputRef }: FileUploadProps) => {
  const {
    isModalOpen,
    confirmText,
    isConfirmEnabled,
    openModal,
    closeModal,
    handleConfirmTextChange,
  } = useConfirmResetModal();

  const { loading, isGlowing, confirmReset } = useFormButtons(
    fileInputRef,
    JSONFilInputRef,
    closeModal
  );
  const { isDarkMode } = useDarkMode();

  return (
    <div className="flex justify-between mt-6">
      <button
        type="submit"
        disabled={loading}
        className={`w-48 py-2 font-semibold rounded-md transition relative ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : isGlowing
            ? "bg-blue-500 text-white animate-glow"
            : isDarkMode
            ? "bg-blue-600 hover:bg-blue-500 text-white"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
      >
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <TailSpin
              height={20}
              width={20}
              color="white"
              ariaLabel="loading"
            />
          </div>
        )}

        <span
          className={
            loading
              ? "opacity-0 flex justify-center gap-4"
              : "flex justify-center gap-4"
          }
        >
          {" "}
          Get critical events
          <span className="mt-1">
            <IoMdDownload />
          </span>
        </span>
      </button>
      <button
        type="button"
        onClick={openModal}
        className={`w-48 py-2 ml-4 font-semibold rounded-md transition ${
          isDarkMode
            ? "bg-red-600 hover:bg-red-500 text-white"
            : "bg-red-500 hover:bg-red-600 text-white"
        }`}
      >
        <span className="flex justify-center gap-4">
          {" "}
          Reset
          <span className="mt-1">
            <GrPowerReset />
          </span>
        </span>
      </button>

      <ConfirmResetModal
        isOpen={isModalOpen}
        confirmText={confirmText}
        isConfirmEnabled={isConfirmEnabled}
        onClose={closeModal}
        onConfirm={confirmReset}
        onTextChange={handleConfirmTextChange}
      />
    </div>
  );
};

export default FormButtons;
