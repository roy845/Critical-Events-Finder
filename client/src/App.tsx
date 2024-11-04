import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import AppInfoModal from "./components/modal/AppInfoModal";
import ScrollButton from "./components/ScrollButton";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <Header title="Critical Events Finder" />
      <MainContent />
      <ScrollButton />
      <AppInfoModal />
    </div>
  );
}

export default App;
