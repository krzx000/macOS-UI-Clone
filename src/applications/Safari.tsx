import { Application } from "../types/application";
import SafariIcon from "../assets/icons/applications/Safari.png";

export const Safari: Application = {
  name: "Safari",
  position: { x: 100, y: 100 },
  size: { width: 400, height: 400 },
  icon: SafariIcon,
  minimized: false,
  maximized: false,
  minWidth: 400,
  minHeight: 400,
  zIndex: 0,
  id: 1,
  content: () => {
    return (
      <div key={"safari"} className="h-full w-full flex justify-center items-center">
        <h1 className="text-4xl font-bold text-gray-700">Safari</h1>
      </div>
    );
  },
};
