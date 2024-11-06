import { useDarkMode } from "../hooks/useDarKMode";

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

      <div
        onClick={toggleDarkMode}
        className="w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer relative"
        style={{
          backgroundColor: isDarkMode ? "#4B5563" : "#D1D5DB",
        }}
      >
        <span
          className={`absolute left-1 text-yellow-400 ${
            isDarkMode ? "opacity-100" : "opacity-100"
          } transition-opacity`}
        >
          ☀️
        </span>
        <span
          className={`absolute right-1 text-gray-200 ${
            isDarkMode ? "opacity-100" : "opacity-100"
          } transition-opacity`}
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
