import { FaUpload } from "react-icons/fa";
import { useFileUpload } from "../hooks/useFileUpload";
import { TailSpin } from "react-loader-spinner";

interface FileUploadProps {
  fileInputRef: React.RefObject<HTMLInputElement>;
}

const FileUpload = ({ fileInputRef }: FileUploadProps) => {
  const { onFileChange, loading, isDarkMode, spinnerColor } =
    useFileUpload(fileInputRef);

  return (
    <div>
      <label
        className={`block font-medium mb-2 text-center ${
          isDarkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Import from Excel
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
              Upload Excel
            </span>
          </>
        )}
      </div>
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={onFileChange}
        ref={fileInputRef}
        className="hidden"
      />
    </div>
  );
};

export default FileUpload;
