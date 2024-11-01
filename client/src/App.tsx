import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <Header title="Critical Events Finder" />
      <MainContent />
    </div>
  );
}

export default App;
