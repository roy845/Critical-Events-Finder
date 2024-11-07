import React from "react";
import { FiEdit, FiCheck } from "react-icons/fi";
import Tooltip from "../Tooltip";
import useFileNameModal from "../../hooks/useFileNameModal";
import { useDarkMode } from "../../hooks/useDarKMode";
import { CiExport } from "react-icons/ci";
import { MdCancel } from "react-icons/md";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { IoIosClose, IoIosColorFill } from "react-icons/io";

interface FileNameModalProps {
  onConfirm: (fileName: string) => void;
  onCancel: () => void;
}

const FileNameModal: React.FC<FileNameModalProps> = ({
  onConfirm,
  onCancel,
}) => {
  const { isDarkMode } = useDarkMode();
  const { fileName, isEditing, setFileName, setIsEditing, autofillFileName } =
    useFileNameModal();

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isDarkMode ? "bg-black bg-opacity-80" : "bg-black bg-opacity-50"
      }`}
    >
      <div
        className={`relative p-6 rounded-lg shadow-lg w-full max-w-md ${
          isDarkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"
        }`}
      >
        <button
          onClick={onCancel}
          className="absolute -top-5 -right-5 text-red-500 hover:text-red-700 transition-colors"
        >
          <IoIosClose size={32} />
        </button>

        <h1 className="text-2xl text-center font-bold mb-4 flex justify-center gap-4">
          Export to Excel{" "}
          <span className="mt-1">
            <PiMicrosoftExcelLogoFill className="cursor-pointer" />
          </span>
        </h1>
        <h2 className="text-xl font-semibold mb-4">Enter File Name</h2>

        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            placeholder="Enter file name"
            readOnly={!isEditing}
            className={`border rounded w-full p-2 ${
              isDarkMode
                ? "bg-gray-700 border-gray-600 text-gray-200"
                : "bg-white border-gray-300 text-gray-900"
            } ${isEditing ? "" : "cursor-not-allowed"}`}
          />

          <button
            onClick={autofillFileName}
            className={`p-2 rounded transition-colors ${
              isDarkMode
                ? "bg-gray-600 text-gray-200 hover:bg-gray-500"
                : "bg-gray-300 text-gray-900 hover:bg-gray-400"
            }`}
          >
            <span className="flex justify-center gap-2">
              Autofill
              <IoIosColorFill className="mt-1" />
            </span>
          </button>
          <Tooltip message={isEditing ? "Save file name" : "Edit file name"}>
            {isEditing ? (
              <FiCheck
                onClick={() => setIsEditing(false)}
                className={`cursor-pointer ${
                  isDarkMode ? "text-green-400" : "text-green-600"
                }`}
              />
            ) : (
              <FiEdit
                onClick={() => setIsEditing(true)}
                className={`cursor-pointer ${
                  isDarkMode ? "text-gray-200" : "text-gray-700"
                }`}
              />
            )}
          </Tooltip>
        </div>

        <div className="flex justify-between gap-4">
          <button
            onClick={onCancel}
            className={`p-2 rounded transition-colors ${
              isDarkMode
                ? "bg-gray-600 text-gray-200 hover:bg-gray-500"
                : "bg-gray-300 text-gray-900 hover:bg-gray-400"
            }`}
          >
            <span className="flex justify-center gap-2">
              Cancel
              <MdCancel className="mt-1" />
            </span>
          </button>
          <button
            onClick={() => onConfirm(fileName)}
            disabled={!fileName.trim()}
            className={`p-2 rounded transition-colors ${
              !fileName.trim()
                ? "bg-gray-300 text-gray-400 cursor-not-allowed"
                : isDarkMode
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            <span className="flex justify-center gap-2">
              Export
              <CiExport className="mt-1" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileNameModal;
