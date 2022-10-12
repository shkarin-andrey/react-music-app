import React, { FC } from "react";
import { ICardSong } from "./CardSong.interface";
import StatusPlayTrack from "./../StatusPlayTrack/StatusPlayTrack";

const CardSong: FC<ICardSong> = ({ id, image, subtitle, title, isActive }) => {
  // TODO: rerender on scroll
  return (
    <div className="w-[250px] p-4 bg-white/5 rounded-lg">
      <div className="h-52 w-full group relative cursor-pointer">
        <img
          src={image}
          alt={title}
          className={`transition-all duration-300 w-full h-full object-cover ${
            isActive(id) ? "blur-sm" : ""
          } group-hover:blur-sm`}
        />
        <div
          className={`absolute top-0 left-0 w-full h-full ${
            isActive(id) ? "flex" : "hidden"
          } group-hover:flex justify-center items-center`}
        >
          <StatusPlayTrack id={id} />
        </div>
      </div>
      <div className="font-bold text-white text-base mt-1 truncate">
        {title}
      </div>
      <div className="text-white text-sm truncate">{subtitle}</div>
    </div>
  );
};

export default CardSong;
