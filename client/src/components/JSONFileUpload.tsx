import { TailSpin } from "react-loader-spinner";
import { FaUpload } from "react-icons/fa";
import useJSONFileUpload from "../hooks/useJSONFileUpload";

interface JSONFileUploadProps {
  fileInputRef: React.RefObject<HTMLInputElement>;
}

const JSONFileUpload = ({ fileInputRef }: JSONFileUploadProps) => {
  const { onFileChange, loading, isDarkMode, spinnerColor } =
    useJSONFileUpload(fileInputRef);
  return (
    <div>
      <label
        className={`block font-medium mb-2 text-center ${
          isDarkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Import from JSON
      </label>
      <div
        className="flex justify-center items-center space-x-2 cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
      >
        {loading ? (
          <TailSpin color={spinnerColor} height={50} width={50} />
        ) : (
          <>
            <FaUpload
              className={isDarkMode ? "text-blue-400" : "text-blue-700"}
              size={24}
            />
            <span
              className={`font-semibold ${
                isDarkMode ? "text-blue-400" : "text-blue-700"
              }`}
            >
              Upload JSON
            </span>
          </>
        )}
      </div>
      <input
        type="file"
        accept=".json"
        onChange={onFileChange}
        ref={fileInputRef}
        className="hidden"
      />
    </div>
  );
};

export default JSONFileUpload;
