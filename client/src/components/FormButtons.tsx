import { useFormButtons } from "../hooks/useFormButtons";

interface FileUploadProps {
  fileInputRef: React.RefObject<HTMLInputElement>;
}

const FormButtons = ({ fileInputRef }: FileUploadProps) => {
  const { loading, handleReset } = useFormButtons(fileInputRef);

  return (
    <div className="flex justify-between mt-6">
      <button
        type="submit"
        disabled={loading}
        className={`w-48 py-2 font-semibold rounded-md transition ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
      >
        {loading ? "Loading..." : "Get critical events"}
      </button>
      <button
        type="button"
        onClick={handleReset}
        className="w-48 py-2 ml-4 font-semibold rounded-md bg-red-500 text-white hover:bg-red-600 transition"
      >
        Reset
      </button>
    </div>
  );
};

export default FormButtons;
