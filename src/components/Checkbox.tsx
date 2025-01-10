import { useId } from "react";
import { FaMinus } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

export const Checkbox: React.FC<{
  checked?: boolean;
  label?: string;
  onToggle?: (value: boolean) => void;
}> = ({ checked, label, onToggle }) => {
  const id = useId();
  return (
    <div className="flex items-center gap-1.5 ">
      <span
        className={`CHECKBOX cursor-pointer flex relative w-4 h-4 rounded-[3.5px] ${
          checked ? "bg-macos-blue bg-primary-enabled-gradient CHECKED" : "bg-white "
        }`}
      >
        {checked && (
          <FaCheck
            className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            color="white"
            fontSize={"9px"}
          />
        )}

        <input
          onChange={(e) => {
            onToggle && onToggle(e.currentTarget.checked);
          }}
          type="checkbox"
          className="w-full h-full opacity-0 z-10"
          id={id}
          checked={checked}
        />
      </span>
      {label && (
        <label className="text-black/85 text-sm cursor-pointer" htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
};
