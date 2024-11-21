import useRandomEventButton from "../hooks/useRandomEventButton";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import Tooltip from "./Tooltip";

const RandomEventButton = () => {
  const { buttonColor, handleClick, isSpinning } = useRandomEventButton();

  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: buttonColor }}
      className="text-white font-semibold py-2 px-4 rounded shadow group hover:animate-glow transition duration-300"
    >
      <span className="flex justify-center gap-4">
        <Tooltip message="Generate Random Events">
          <span className={`mt-0.5 ${isSpinning ? "animate-spin" : ""}`}>
            <GiPerspectiveDiceSixFacesRandom size={50} />
          </span>
        </Tooltip>
      </span>
    </button>
  );
};

export default RandomEventButton;
