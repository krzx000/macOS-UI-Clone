import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import { getBackgroundImage } from "./utils/utils";

export const App = () => {
  const theme = useSelector((state: RootState) => state.system.theme);

  return (
    <div
      style={{ backgroundImage: `url('${getBackgroundImage(theme)}')` }}
      className="BACKGROUND w-[100vw] h-[100vh] relative "
    ></div>
  );
};
