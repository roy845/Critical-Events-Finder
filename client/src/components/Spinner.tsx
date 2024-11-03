import React from "react";
import { TailSpin } from "react-loader-spinner";

interface SpinnerProps {
  size?: number;
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  size = 50,
  color = "blue",
}): JSX.Element => {
  return (
    <div className="flex justify-center items-center mt-24">
      <TailSpin height={size} width={size} color={color} ariaLabel="loading" />
    </div>
  );
};

export default Spinner;
