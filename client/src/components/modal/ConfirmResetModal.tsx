import { MdCancel } from "react-icons/md";
import { useDarkMode } from "../../hooks/useDarKMode";
import { GrPowerReset } from "react-icons/gr";
import { IoIosClose, IoIosWarning } from "react-icons/io";

interface ConfirmResetModalProps {
  isOpen: boolean;
  confirmText: string;
  isConfirmEnabled: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onTextChange: (text: string) => void;
}

const ConfirmResetModal = ({
  isOpen,
  confirmText,
  isConfirmEnabled,
  onClose,
  onConfirm,
  onTextChange,
}: ConfirmResetModalProps) => {
  const { isDarkMode } = useDarkMode();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className={`relative p-6 w-80 rounded-lg ${
          isDarkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute -top-5 -right-5 text-red-500 hover:text-red-700 transition-colors"
        >
          <IoIosClose size={32} />
        </button>

        <h2 className="text-lg font-semibold mb-4 text-center flex items-center justify-center gap-2">
          Confirm Reset
          <IoIosWarning size={24} className="text-yellow-500" />
        </h2>
        <p className="mb-4">
          To confirm, type <strong>Reset Form</strong> below:
        </p>
        <input
          type="text"
          value={confirmText}
          onChange={(e) => onTextChange(e.target.value)}
          placeholder="Type Reset Form"
          className={`w-full px-3 py-2 mb-4 border rounded-md ${
            isDarkMode
              ? "bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400"
              : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
          }`}
        />
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className={`px-4 py-2 font-semibold rounded-md ${
              isDarkMode
                ? "bg-gray-600 text-gray-200 hover:bg-gray-500"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <span className="flex justify-center gap-4">
              Cancel
              <span className="mt-1">
                <MdCancel />
              </span>
            </span>
          </button>
          <button
            onClick={onConfirm}
            disabled={!isConfirmEnabled}
            className={`px-4 py-2 font-semibold text-white rounded-md transition ${
              isConfirmEnabled
                ? "bg-red-500 hover:bg-red-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            <span className="flex justify-center gap-4">
              Confirm
              <span className="mt-1">
                <GrPowerReset />
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmResetModal;
