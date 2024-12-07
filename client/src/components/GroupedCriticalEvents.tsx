import { useDarkMode } from "../hooks/useDarKMode";
import LetterSelector from "./LetterSelector";
import { useGroupedCriticalEvents } from "../hooks/useGroupedCriticalEvents";
import ItemsPerPageGroupedCriticalEvents from "./ItemsPerPageGroupedCriticalEvents";

const GroupedCriticalEvents = (): JSX.Element => {
  const { isDarkMode } = useDarkMode();
  const {
    availableLetters,
    selectedLetter,
    groupedCriticalEvents,
    handleLetterChange,
  } = useGroupedCriticalEvents();

  return (
    <div
      className={`p-6 min-h-screen ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h1
        className={`text-3xl font-bold text-center mb-8 ${
          isDarkMode ? "text-white" : "text-gray-800"
        }`}
      >
        Grouped Critical Events
      </h1>

      <div className="flex items-center gap-4 mb-8">
        <div className="flex items-center gap-4">
          <LetterSelector
            availableLetters={availableLetters}
            selectedLetter={selectedLetter}
            onChange={handleLetterChange}
            isDarkMode={isDarkMode}
          />
        </div>

        <ItemsPerPageGroupedCriticalEvents />
      </div>

      {Object.entries(groupedCriticalEvents).map(([letter, events]) => (
        <div
          key={letter}
          className={`mb-6 border-b pb-4 ${
            isDarkMode ? "border-gray-600" : "border-gray-300"
          }`}
        >
          <h2
            className={`text-2xl font-semibold mb-4 ${
              isDarkMode ? "text-white" : "text-gray-700"
            }`}
          >
            {letter}
          </h2>
          <ul className="list-none">
            {events.map((event: string, index) => (
              <li
                key={`${event}-${index}`}
                className={`text-lg mb-2 transition-colors cursor-pointer ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {event}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GroupedCriticalEvents;
