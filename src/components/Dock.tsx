import { useEffect, useState } from "react";
import { DockApplication } from "./DockApplication";
import { Trash } from "../applications/Trash";
import { Safari } from "../applications/Safari";

export const Dock: React.FC = () => {
  const [dockVisible, setDockVisible] = useState(true);

  const handleDockUnhover = () => {
    setTimeout(() => {
      // setDockVisible(false);
    }, 5000);
  };

  return (
    <div
      onMouseOver={() => setDockVisible(true)}
      onMouseLeave={handleDockUnhover}
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full pb-1 flex justify-center items-center"
    >
      <div
        className={`DOCK-BACKGROUND h-16  rounded-2xl bg-[#f6f6f636] backdrop-blur-[135px] transition-transform duration-500  flex justify-center gap-0.5 items-center box-content px-1.5  pt-1.5 ${
          dockVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="DOCK-APPLICATION-CONTAINER flex gap-0.5 h-full">
          <DockApplication application={Safari} />
          <DockApplication application={Safari} />
          <DockApplication application={Safari} />
          <DockApplication application={Safari} />
          <DockApplication application={Safari} />
          <DockApplication application={Safari} />
        </div>
        <div className="bg-[#41414150] h-12 w-[1px] rounded-full mx-3" />
        <DockApplication application={Trash} />
      </div>
    </div>
  );
};
