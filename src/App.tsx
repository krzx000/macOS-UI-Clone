import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import { useMemo, useState } from "react";
import { getBackgroundImage } from "./utils/utils";
import { WindowControl } from "./components/WindowControl";
import { Pushbutton } from "./components/PushButton";
import { TextField } from "./components/TextField";
import { ProgressBar } from "./components/ProgressBar";
import { Checkbox } from "./components/Checkbox";

export const App = () => {
  const theme = useSelector((state: RootState) => state.system.theme);

  // Memoizacja obrazu tła dla wydajności
  const backgroundImage = useMemo(() => getBackgroundImage(theme), [theme]);
  const [accepted, setAccepted] = useState(false);

  return (
    <div
      className={`BACKGROUND w-[100vw] h-[100vh] relative`}
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="flex gap-2">
        <WindowControl type="close" />
        <WindowControl type="minimize" />
        <WindowControl type="zoom" />
      </div>

      <div>
        <Pushbutton enabled state="primary">
          Font XD
        </Pushbutton>
        <Pushbutton state="primary">Font XD</Pushbutton>
        <Pushbutton state="secondary" enabled>
          Font XD
        </Pushbutton>
        <Pushbutton state="secondary">Font XD</Pushbutton>
        <Pushbutton state="destructive">Font XD</Pushbutton>
      </div>

      <div>
        <TextField placeholder="Wprowadź hasło" rounded />
      </div>
      <div>
        <ProgressBar progress={50} large />
      </div>
      <div>
        <Checkbox
          checked={accepted}
          label="chuj"
          onToggle={(value) => {
            setAccepted(value);
            console.log(123);
          }}
        />
      </div>
    </div>
  );
};
