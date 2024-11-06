import { useDarkMode } from "../hooks/useDarKMode";
import CriticalEventsForm from "./CriticalEventsForm";

function MainContent() {
  const { isDarkMode } = useDarkMode();

  return (
    <main
      className={`mt-8 w-full flex justify-center ${
        isDarkMode ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-900"
      }`}
    >
      <CriticalEventsForm />
    </main>
  );
}

export default MainContent;
