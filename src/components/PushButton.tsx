import { getButtonStyle } from "../utils/utils";

export const Pushbutton: React.FC<
  {
    state: "primary" | "secondary" | "destructive";
    enabled?: boolean;
    children: React.ReactNode;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ state, enabled, children, ...rest }) => {
  return (
    <button {...rest} className={`px-2 py-1 rounded-md text-sm ${getButtonStyle(state, enabled ?? false)}`}>
      {children}
    </button>
  );
};
