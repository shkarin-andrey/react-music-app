import { FC } from "react";
import { IProgressBar } from "./ProgressBar.interface";

const ProgressBar: FC<IProgressBar> = ({
  max = 1,
  onChange,
  value,
  step = 1,
}) => {
  return (
    <input
      type={"range"}
      step={step}
      min={0}
      max={max}
      onChange={onChange}
      value={value}
      className="cursor-pointer w-full"
    />
  );
};

export default ProgressBar;
