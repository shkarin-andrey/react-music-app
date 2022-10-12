import React, { FC, useState, useEffect, useRef } from "react";
import { FaVolumeDown, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { useGetTrackDetailQuery } from "../../store/api/shazamApi";
import { useAppSelector } from "./../../hooks/useAppSelector";
import ProgressBar from "./../ProgressBar/ProgressBar";
import StatusPlayTrack from "./../StatusPlayTrack/StatusPlayTrack";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import ControlTime from "../ControlTime";

const ControlMusicPanel: FC = () => {
  const { activeTrack, statusTrack } = useAppSelector((state) => state.track);
  const { data } = useGetTrackDetailQuery(activeTrack, {
    skip: activeTrack === "" ? true : false,
  });

  const audioRef = useRef(new Audio());
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const [volume, setVolume] = useState<number>(0.5);
  const [trackProgress, setTrackProgress] = useState<number>(0);

  const { duration } = audioRef.current;

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      // if (audioRef.current.ended) {
      //   toNextTrack();
      // } else {
      setTrackProgress(audioRef.current.currentTime);
      // }
    }, 1000);
  };

  useEffect(() => {
    if (statusTrack === "pause") {
      audioRef.current.pause();
    }
    if (statusTrack === "active") {
      audioRef.current.play();
      startTimer();
    }
  }, [statusTrack]);

  // Handles cleanup and setup when changing tracks
  useEffect(() => {
    if (audioRef.current.src) {
      audioRef.current.pause();
    }

    audioRef.current = new Audio(data?.hub.actions[1].uri);
    setTrackProgress(audioRef.current.currentTime || 0);

    if (audioRef.current.src) {
      audioRef.current.play();
      startTimer();
    }
  }, [data]);

  const handleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = Number(event.target.value);
    audioRef.current.currentTime = targetValue;
    setTrackProgress(targetValue);
  };

  const handleVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = Number(event.target.value);
    audioRef.current.volume = targetValue;
    setVolume(targetValue);
  };

  return (
    <div
      className={`${
        activeTrack !== "" ? "flex" : "hidden"
      } justify-between items-center backdrop-blur-xl fixed w-full bottom-0 left-0 p-5 px-10 text-white rounded-t-xl`}
    >
      <div className="flex items-center gap-5">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src={data?.images?.coverart}
            alt={data?.title}
            className={
              activeTrack && statusTrack === "active"
                ? "animate-spin duration-[3s]"
                : ""
            }
          />
        </div>
        <div className="flex flex-col">
          <div className="font-bold text-base">{data?.title}</div>
          <div className="font-bold text-sm">{data?.subtitle}</div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-5">
          <MdSkipPrevious className="w-8 h-8" />
          <StatusPlayTrack id={data?.key || ""} />
          <MdSkipNext className="w-8 h-8" />
        </div>
        <div className="flex items-center gap-3 w-[500px]">
          <ControlTime time={trackProgress} />
          <ProgressBar
            max={Math.round(duration) || 0}
            onChange={handleValue}
            value={trackProgress}
          />
          <ControlTime time={duration} />
        </div>
      </div>

      <div className="flex items-center gap-3 w-[200px]">
        {volume === 0 ? (
          <FaVolumeMute className="w-7 h-7" />
        ) : volume < 0.5 ? (
          <FaVolumeDown className="w-7 h-7" />
        ) : (
          <FaVolumeUp className="w-7 h-7" />
        )}

        <ProgressBar step={0.01} onChange={handleVolume} value={volume} />
      </div>
    </div>
  );
};

export default ControlMusicPanel;
