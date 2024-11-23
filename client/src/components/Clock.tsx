import useClock from "../hooks/useClock";

const Clock = () => {
  const { currentTime, isDarkMode } = useClock();

  return (
    <div
      className={`flex justify-center items-center ${
        isDarkMode ? "bg-blue-900" : "bg-blue-600"
      }`}
    >
      <div className={"text-3xl font-bold"}>
        {currentTime.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default Clock;
