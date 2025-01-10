export const WindowControl: React.FC<{ type: "close" | "minimize" | "zoom" }> = ({ type }) => {
  const getColor = (type: "close" | "minimize" | "zoom") => {
    switch (type) {
      case "close":
        return "bg-[#FF5F57]";
      case "minimize":
        return "bg-[#FEBC2E]";
      case "zoom":
        return "bg-[#28C840]";
    }
  };
  return <div className={`rounded-full w-3 h-3 border-0.5 border-black-20 ${getColor(type)}`} />;
};
