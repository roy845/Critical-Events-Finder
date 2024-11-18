import { useDarkMode } from "../hooks/useDarKMode";

type TableHeaderProps = {
  label: string;
};

const TableHeader = ({ label }: TableHeaderProps): JSX.Element => {
  const { isDarkMode } = useDarkMode();
  return (
    <th
      className={`py-2 px-4 text-left font-semibold ${
        isDarkMode ? "text-gray-300" : "text-gray-700"
      }`}
    >
      {label}
    </th>
  );
};

export default TableHeader;
