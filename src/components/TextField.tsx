import { useState } from "react";
import { GoXCircleFill } from "react-icons/go";

export const TextField: React.FC<
  {
    rounded?: boolean;
    onValueChange?: (value: string) => void; // Callback do informowania rodzica o zmianach
  } & React.InputHTMLAttributes<HTMLInputElement>
> = ({ rounded, onValueChange, ...rest }) => {
  const [clearButtonVisible, setClearButtonVisible] = useState(false);
  const [value, setValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    setClearButtonVisible(!!newValue);
    onValueChange?.(newValue); // Informowanie rodzica
  };

  return (
    <span className="relative">
      <input
        {...rest}
        className={`TEXT-FIELD bg-white px-2 py-1 box-content pr-5 text-sm disabled:bg-white/70 placeholder:text-black/25 text-black/85 outline-none ${
          rounded ? "rounded-md" : ""
        }`}
        onFocus={() => setClearButtonVisible(true)}
        onBlur={(e) => setClearButtonVisible(!!e.currentTarget.value)}
        onChange={handleInputChange}
        value={value}
      />
      {clearButtonVisible && (
        <GoXCircleFill
          onClick={() => {
            setValue("");
            setClearButtonVisible(false);
            onValueChange?.(""); // Informowanie rodzica o wyczyszczeniu
          }}
          className="absolute right-1 top-1/2 -translate-y-1/2"
          fontSize={"13px"}
          color="#808080"
        />
      )}
    </span>
  );
};
