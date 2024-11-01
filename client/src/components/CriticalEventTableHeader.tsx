interface CriticalEventTableHeaderProps {
  title: string;
}

export const CriticalEventTableHeader = ({
  title,
}: CriticalEventTableHeaderProps) => {
  return <h2 className="text-xl font-medium text-gray-800 mb-4">{title}</h2>;
};
