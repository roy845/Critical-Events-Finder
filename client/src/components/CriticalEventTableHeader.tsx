import { useDarkMode } from "../hooks/useDarKMode";

interface CriticalEventTableHeaderProps {
  title: string;
}

export const CriticalEventTableHeader = ({
  title,
}: CriticalEventTableHeaderProps) => {
  const { isDarkMode } = useDarkMode();

  return (
    <h2
      className={`text-xl font-medium mb-4 ${
        isDarkMode ? "text-gray-300" : "text-gray-800"
      }`}
    >
      {title}
    </h2>
  );
};
