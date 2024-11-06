import { TailSpin } from "react-loader-spinner";
import { useDarkMode } from "../hooks/useDarKMode";

interface SpinnerProps {
  size?: number;
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 50, color }): JSX.Element => {
  const { isDarkMode } = useDarkMode();
  const spinnerColor: string = color || (isDarkMode ? "#ffffff" : "blue");

  return (
    <div className="flex justify-center items-center mt-24">
      <TailSpin
        height={size}
        width={size}
        color={spinnerColor}
        ariaLabel="loading"
      />
    </div>
  );
};

export default Spinner;
