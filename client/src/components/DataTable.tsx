import { useDarkMode } from "../hooks/useDarKMode";
import TableHeaders from "./TableHeaders";

type DataTableProps<T> = {
  items: T[];
  headers: string[];
  numOfHeaders: number;
  renderRow: (item: T, index: number) => JSX.Element;
};

function DataTable<T>({
  items,
  headers,
  numOfHeaders,
  renderRow,
}: DataTableProps<T>): JSX.Element {
  const { isDarkMode } = useDarkMode();

  return (
    <table
      className={`min-w-full border rounded-lg shadow-md ${
        isDarkMode
          ? "bg-gray-800 border-gray-700 text-gray-300"
          : "bg-white border-gray-200 text-gray-900"
      }`}
    >
      <thead>
        <TableHeaders numOfHeaders={numOfHeaders} labels={headers} />
      </thead>
      <tbody>{items.map(renderRow)}</tbody>
    </table>
  );
}

export default DataTable;
