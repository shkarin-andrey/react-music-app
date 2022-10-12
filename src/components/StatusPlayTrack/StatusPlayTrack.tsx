import { FC } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { active, status } from "../../store/redux/trackSlice";
import { useAppDispatch } from "./../../hooks/useAppDispatch";
import { useAppSelector } from "./../../hooks/useAppSelector";
import { IStatusPlayTrack } from "./StatusPlayTrack.interface";

const StatusPlayTrack: FC<IStatusPlayTrack> = ({ id }) => {
  const dispatch = useAppDispatch();
  const { activeTrack, statusTrack } = useAppSelector((state) => state.track);

  const isActive = activeTrack === id && statusTrack === "active";

  const onPlayTrack = () => {
    dispatch(active(id));
    dispatch(status("active"));
  };

  const onPauseTrack = () => {
    dispatch(status("pause"));
  };

  return isActive ? (
    <FaPause
      className="w-10 h-10 text-white cursor-pointer"
      onClick={onPauseTrack}
    />
  ) : (
    <FaPlay
      className="w-10 h-10 text-white cursor-pointer"
      onClick={onPlayTrack}
    />
  );
};

export default StatusPlayTrack;
