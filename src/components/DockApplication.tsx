import { useDispatch, useSelector } from "react-redux";
import { Application } from "../types/application";
import { AppDispatch, RootState } from "../app/store";
import { openApp } from "../app/systemSlice";

export const DockApplication: React.FC<{ application: Application }> = ({ application }) => {
  const runningApps = useSelector((state: RootState) => state.system.runningApps);
  const dispatch = useDispatch<AppDispatch>();
  const handleAppClick = () => {
    if (!runningApps.find((app) => app.id === application.id)) {
      dispatch(openApp({ ...application, zIndex: runningApps.length + 1 }));
    }
  };

  return (
    <div
      className="DOCK-APPLICATION flex flex-col items-center justify-center h-full relative pb-2 hover:px-2 transition-all duration-200"
      key={application.name}
    >
      <img
        draggable={false}
        src={application.icon}
        alt={application.name}
        className={`h-full ${
          runningApps.find((app) => app.id === application.id) ? "DOCK-APPLICATION-OPENED" : ""
        }`}
        onClick={handleAppClick}
      />

      {runningApps.find((app) => app.id === application.id) && (
        <div className="rounded-full w-1 h-1 bg-[#383838] absolute bottom-[0.1875rem] left-1/2 -translate-x-1/2 mix-blend-plus-darker DOT" />
      )}
    </div>
  );
};
