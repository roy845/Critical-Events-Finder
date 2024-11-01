import { FaUpload } from "react-icons/fa";
import { useFileUpload } from "../hooks/useFileUpload";

interface FileUploadProps {
  fileInputRef: React.RefObject<HTMLInputElement>;
}

const FileUpload = ({ fileInputRef }: FileUploadProps) => {
  const { onFileChange } = useFileUpload();

  return (
    <div>
      <label className="block text-gray-700 font-medium mb-2 text-center">
        Import from Excel
      </label>
      <div
        className="flex justify-center items-center space-x-2 cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
      >
        <FaUpload className="text-blue-700" size={24} />
        <span className="text-blue-700 font-semibold">Upload Excel</span>
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
