import { FC } from "react";
import { IControlTime } from "./ControlTime.interface";

const ControlTime: FC<IControlTime> = ({ time }) => {
  const minutes = Math.round(time / 60) || "0";
  let seconds = Math.round(time % 60) || "0";

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return (
    <div className="flex">
      <span>{minutes}</span>:<span>{seconds}</span>
    </div>
  );
};

export default ControlTime;
