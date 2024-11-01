interface CriticalEventsHeaderProps {
  title: string;
}

const CriticalEventsHeader = ({ title }: CriticalEventsHeaderProps) => (
  <thead>
    <tr className="bg-gray-100 border-b border-gray-200">
      <th className="py-2 px-4 text-left text-gray-700 font-semibold">
        {title}
      </th>
    </tr>
  </thead>
);

export default CriticalEventsHeader;
