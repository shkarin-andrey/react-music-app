import React, { FC } from "react";
import ControlMusicPanel from "../ControlMusicPanel";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { ILayout } from "./Layout.interface";

const Layout: FC<ILayout> = ({ children, title }) => {
  return (
    <div className="w-full h-screen overflow-hidden flex bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-700">
      <Sidebar />
      <div className="flex flex-col w-full h-full">
        <Header title={title} />
        <main className="scrollbar p-5 h-full overflow-auto pb-20">
          {children}
        </main>
        <ControlMusicPanel />
      </div>
    </div>
  );
};

export default Layout;
