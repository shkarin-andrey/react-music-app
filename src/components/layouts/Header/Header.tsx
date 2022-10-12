import { FC } from "react";
import { IHeader } from "./Header.interface";

const Header: FC<IHeader> = ({ title }) => {
  return (
    <header className="flex justify-between items-center w-full py-3 shadow-2xl px-5">
      <h1 className="font-bold text-xl text-white">{title}</h1>
      <input
        type="text"
        placeholder="Поиск..."
        className="rounded-xl px-3 py-1 outline-none w-[300px]"
      />
    </header>
  );
};

export default Header;
