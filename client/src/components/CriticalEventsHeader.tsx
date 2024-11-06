import { useDarkMode } from "../hooks/useDarKMode";

interface CriticalEventsHeaderProps {
  title: string;
}

const CriticalEventsHeader = ({ title }: CriticalEventsHeaderProps) => {
  const { isDarkMode } = useDarkMode();

  return (
    <thead>
      <tr
        className={`${
          isDarkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-gray-100 border-gray-200"
        }`}
      >
        <th
          className={`py-2 px-4 text-left font-semibold ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {title}
        </th>
      </tr>
    </thead>
  );
};

export default CriticalEventsHeader;
