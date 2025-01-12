import React from "react";

export const MenuBarItem: React.FC<{
  label?: string;
  icon?: React.ReactNode;
  options?: (string | null)[];
  bold?: boolean;
  active?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
}> = ({ label, icon, options, bold, active, onClick, onMouseEnter }) => {
  return (
    <button
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      className={`px-2.5 py-0.5 flex items-center rounded-md ${
        active ? "bg-[#E6E6E6]" : ""
      } cursor-pointer relative`}
    >
      {icon && icon}
      <span className={`text-black text-sm ${bold ? "font-bold" : "font-semibold"}`}>{label}</span>

      {options && active && (
        <div className="MENU-BAR-ITEM absolute top-full translate-y-1.5 left-0 z-20 w-max rounded-md bg-[#F6F6F6]/60 backdrop-blur-[80px] flex flex-col p-1.5">
          {options.map((option, index) => {
            if (option === null) {
              return (
                <div key={index} className="px-2 py-1">
                  <div className="bg-black/10 w-full h-[1px]" />
                </div>
              );
            }

            return (
              <div
                key={index}
                className="px-2 py-1 text-black text-sm cursor-pointer w-full text-left hover:bg-macos-blue hover:text-white rounded-md"
              >
                {option}
              </div>
            );
          })}
        </div>
      )}
    </button>
  );
};
