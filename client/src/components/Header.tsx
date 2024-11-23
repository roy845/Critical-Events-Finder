import { useDarkMode } from "../hooks/useDarKMode";
import Clock from "./Clock";

type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header
      className={`py-6 px-4 w-full flex items-center justify-center gap-8 shadow ${
        isDarkMode ? "bg-blue-900 text-white" : "bg-blue-600 text-white"
      }`}
    >
      <h1 className="text-3xl font-bold">{title}</h1>
      <Clock />

      <div
        onClick={toggleDarkMode}
        className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer relative transition-all duration-300 ${
          isDarkMode
            ? "bg-gray-700 hover:shadow-[0_0_10px_3px_rgba(255,255,255,0.7)]"
            : "bg-gray-300 hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.5)]"
        }`}
      >
        <span
          className={`absolute left-1 text-yellow-400 transition-opacity ${
            isDarkMode ? "opacity-100" : "opacity-100"
          }`}
        >
          ☀️
        </span>
        <span
          className={`absolute right-1 text-gray-200 transition-opacity ${
            isDarkMode ? "opacity-100" : "opacity-100"
          }`}
        >
          🌙
        </span>

        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${
            isDarkMode ? "translate-x-6" : "translate-x-0"
          }`}
        ></div>
      </div>
    </header>
  );
}

export default Header;
