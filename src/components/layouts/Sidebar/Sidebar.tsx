import { FC } from "react";
import { Link } from "react-router-dom";

const Sidebar: FC = () => {
  return (
    <aside className="flex flex-col p-5 h-full w-[300px] shadow-2xl overflow-auto">
      <Link
        to={"/"}
        className="font-bold text-xl uppercase text-center text-white"
      >
        Music
      </Link>

      <nav className="flex flex-col mt-10">
        <Link
          to="/"
          className="text-white transition-colors hover:text-white/50"
        >
          Топ треков
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
