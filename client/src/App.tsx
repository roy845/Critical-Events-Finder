import "./App.css";
import { useAppSelector } from "./app/hooks";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ScrollButton from "./components/ScrollButton";

function App() {
  const { daysList } = useAppSelector((state) => state.criticalEvents);
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <Header title="Critical Events Finder" />
      <MainContent />
      {daysList.days_list.length > 0 && <ScrollButton />}
    </div>
  );
}

export default App;
