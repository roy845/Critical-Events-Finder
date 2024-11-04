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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-80">
        <h2 className="text-lg font-semibold mb-4">Confirm Reset</h2>
        <p className="mb-4">
          To confirm, type <strong>Reset Form</strong> below:
        </p>
        <input
          type="text"
          value={confirmText}
          onChange={(e) => onTextChange(e.target.value)}
          placeholder="Type Reset Form"
          className="w-full px-3 py-2 mb-4 border rounded-md"
        />
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 font-semibold text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Cancel
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
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmResetModal;
