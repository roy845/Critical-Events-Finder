import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import Tooltip from "./Tooltip";

interface ExportButtonProps {
  onClick: () => void;
}

const ExportButton = ({ onClick }: ExportButtonProps) => (
  <Tooltip message="Export the table data to an Excel file">
    <PiMicrosoftExcelLogoFill
      size={50}
      onClick={onClick}
      className="cursor-pointer"
    />
  </Tooltip>
);

export default ExportButton;
