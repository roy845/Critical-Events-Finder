import { FaArrowDown, FaArrowUp } from "react-icons/fa";

function ScrollButton() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
      <button
        onClick={scrollToTop}
        className="bg-gray-500 text-white font-bold p-3 rounded-full shadow-lg"
      >
        <FaArrowUp />
      </button>
      <button
        onClick={scrollToBottom}
        className="bg-gray-500 text-white font-bold p-3 rounded-full shadow-lg"
      >
        <FaArrowDown />
      </button>
    </div>
  );
}

export default ScrollButton;
