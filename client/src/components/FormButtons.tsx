import { useFormButtons } from "../hooks/useFormButtons";
import { TailSpin } from "react-loader-spinner";
import { useConfirmResetModal } from "../hooks/useConfirmResetModal";
import ConfirmResetModal from "./modal/ConfirmResetModal";

interface FileUploadProps {
  fileInputRef: React.RefObject<HTMLInputElement>;
}

const FormButtons = ({ fileInputRef }: FileUploadProps) => {
  const {
    isModalOpen,
    confirmText,
    isConfirmEnabled,
    openModal,
    closeModal,
    handleConfirmTextChange,
  } = useConfirmResetModal();

  const { loading, confirmReset } = useFormButtons(fileInputRef, closeModal);

  return (
    <div className="flex justify-between mt-6">
      <button
        type="submit"
        disabled={loading}
        className={`w-48 py-2 font-semibold rounded-md transition relative ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
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
        <span className={loading ? "opacity-0" : ""}>Get critical events</span>
      </button>
      <button
        type="button"
        onClick={openModal}
        className="w-48 py-2 ml-4 font-semibold rounded-md bg-red-500 text-white hover:bg-red-600 transition"
      >
        Reset
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
