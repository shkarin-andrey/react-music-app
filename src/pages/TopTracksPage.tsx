import React, { FC } from "react";
import CardSong from "../components/CardSong";
import { useGetTopChartsQuery } from "../store/api/shazamApi";
import { useAppSelector } from "./../hooks/useAppSelector";

const TopTracksPage: FC = () => {
  const { data, isSuccess } = useGetTopChartsQuery();
  const { activeTrack, statusTrack } = useAppSelector((state) => state.track);

  const isActive = (id: string) =>
    activeTrack === id && statusTrack === "active";

  // console.log(data);
  return (
    <div className="flex flex-wrap gap-5">
      {isSuccess &&
        data?.map((item: any) => (
          <CardSong
            key={item.key}
            id={item.key}
            image={item.images?.coverart}
            subtitle={item.subtitle}
            title={item.title}
            isActive={isActive}
          />
        ))}
    </div>
  );
};

export default TopTracksPage;
