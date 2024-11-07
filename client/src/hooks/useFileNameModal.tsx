import { useState } from "react";

const useFileNameModal = () => {
  const [fileName, setFileName] = useState<string>("Critical Events");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const autofillFileName = () => {
    setFileName("Critical_Events_Report");
    setIsEditing(true);
  };

  return { fileName, setFileName, isEditing, setIsEditing, autofillFileName };
};

export default useFileNameModal;
