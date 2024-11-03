import React from "react";
import { MdOutlineSearchOff } from "react-icons/md";

interface NoResultsFoundProps {
  message?: string;
}

const NoResultsFound = ({
  message = "No search results found.",
}: NoResultsFoundProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-gray-500">
      <MdOutlineSearchOff size={60} />
      <p className="mt-4 text-lg font-semibold">{message}</p>
    </div>
  );
};

export default NoResultsFound;
