import { Application } from "../types/application";
import TrashEmptyIcon from "../assets/icons/applications/TrashEmpty.png";

export const Trash: Application = {
  name: "Trash",
  position: { x: 100, y: 100 },
  size: { width: 400, height: 400 },
  icon: TrashEmptyIcon,
  minimized: false,
  maximized: false,
  minWidth: 400,
  minHeight: 400,
  zIndex: 0,
  id: 0,
  content: () => {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <h1 className="text-4xl font-bold text-gray-700">Trash</h1>
      </div>
    );
  },
};
