import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import useScroll from "../hooks/useScroll";
import { useAppSelector } from "../app/hooks";
import { useDarkMode } from "../hooks/useDarKMode";

function ScrollButton() {
  const { scrollToTop, scrollToBottom } = useScroll();
  const { daysList } = useAppSelector((state) => state.criticalEvents);
  const { isDarkMode } = useDarkMode();

  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
      {daysList.days_list.length > 0 && (
        <>
          <button
            onClick={scrollToTop}
            className={`font-bold p-3 rounded-full shadow-lg transition duration-300 ${
              isDarkMode
                ? "bg-gray-700 text-gray-300 hover:shadow-[0_0_10px_3px_rgba(255,255,255,0.7)]"
                : "bg-gray-500 text-white hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.7)]"
            }`}
          >
            <FaArrowUp />
          </button>
          <button
            onClick={scrollToBottom}
            className={`font-bold p-3 rounded-full shadow-lg transition duration-300 ${
              isDarkMode
                ? "bg-gray-700 text-gray-300 hover:shadow-[0_0_10px_3px_rgba(255,255,255,0.7)]"
                : "bg-gray-500 text-white hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.7)]"
            }`}
          >
            <FaArrowDown />
          </button>
        </>
      )}
    </div>
  );
}

export default ScrollButton;
