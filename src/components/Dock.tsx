import { useState } from "react";
import { DockApplication } from "./DockApplication";
import { Trash } from "../applications/Trash";

export const Dock: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [dockVisible, setDockVisible] = useState(true);

  const handleDockUnhover = () => {
    setTimeout(() => {
      setDockVisible(false);
    }, 1000);
  };

  return (
    <div
      onMouseOver={() => setDockVisible(true)}
      onMouseLeave={handleDockUnhover}
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full pb-1 flex justify-center items-center"
    >
      <div
        className={`DOCK-BACKGROUND h-16 w-72 rounded-2xl bg-[#F6F6F636] backdrop-blur-[135px] transition-transform duration-500  flex justify-center items-center overflow-hidden box-content p-2.5  ${
          dockVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {children}
        <div className="bg-[#41414150] h-full w-[1px] rounded-full mx-3" />
        <DockApplication application={Trash} />
      </div>
    </div>
  );
};
