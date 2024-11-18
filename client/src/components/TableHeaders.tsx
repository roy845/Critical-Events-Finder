import { useDarkMode } from "../hooks/useDarKMode";
import TableHeader from "./TableHeader";

type TableHeadersProps = {
  numOfHeaders: number;
  labels: string[];
};

const TableHeaders = ({
  numOfHeaders,
  labels,
}: TableHeadersProps): JSX.Element => {
  const { isDarkMode } = useDarkMode();

  return (
    <tr
      className={`${
        isDarkMode
          ? "bg-gray-800 border-gray-700"
          : "bg-gray-100 border-gray-200"
      }`}
    >
      {Array.from({ length: numOfHeaders }, (_, index: number) => (
        <TableHeader key={index} label={labels[index] || "N/A"} />
      ))}
    </tr>
  );
};

export default TableHeaders;
