import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import { useMemo } from "react";
import { getBackgroundImage } from "./utils/utils";
import { Dock } from "./components/Dock";
import { MenuBar } from "./components/MenuBar";

export const App = () => {
  const theme = useSelector((state: RootState) => state.system.theme);
  const runningApps = useSelector((state: RootState) => state.system.runningApps);

  // Memoizacja obrazu tła dla wydajności
  const backgroundImage = useMemo(() => getBackgroundImage(theme), [theme]);

  return (
    <div
      className={`BACKGROUND w-[100vw] h-[100vh] relative`}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <MenuBar />
      <div>{runningApps.map((app) => app.content({}))}</div>
      <Dock />
    </div>
  );
};
