import React from "react";

export const MenuBarItem: React.FC<{
  label?: string;
  icon?: React.ReactNode;
  options?: ({ label: string; active: boolean } | null)[];
  bold?: boolean;
  active?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
}> = ({ label, icon, options, bold, active, onClick, onMouseEnter }) => {
  return (
    <li
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      className={`px-2.5 py-0.5 flex items-center justify-center rounded-md cursor-pointer relative`}
    >
      <div
        className={`absolute bg-[#E6E6E6] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
          active ? "scale-100 opacity-100" : "scale-[.85] opacity-0"
        } rounded-md  w-full h-full transition-transform duration-100`}
      />
      {icon && icon}
      {label && (
        <span className={`text-black  text-sm z-10 ${bold ? "font-bold " : "font-[500]"}`}>{label}</span>
      )}

      {options && active && (
        <div className="MENU-BAR-ITEM absolute top-full translate-y-1.5 left-0 z-20 w-max rounded-md bg-[#F6F6F6]/60 backdrop-blur-[80px] flex flex-col p-1.5 cursor-auto">
          {options.map((option, index) => {
            if (option === null) {
              return (
                <div key={index} className="px-2 py-1">
                  <div className="bg-black/10 w-full h-[1px]" />
                </div>
              );
            }

            return (
              <button
                key={index}
                className={`px-2 py-1 text-sm cursor-pointer w-full text-left  ${
                  option.active
                    ? "hover:bg-macos-blue hover:text-white text-black/85 cursor-pointer"
                    : "text-black/35"
                } rounded-md leading-5`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      )}
    </li>
  );
};
