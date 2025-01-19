export const TrailingItem: React.FC<{ icon: string; modal?: React.FC }> = ({ icon, modal }) => {
  return (
    <li className="px-2.5 h-full flex items-center justify-center rounded hover:bg-[#E6E6E6] cursor-pointer">
      <img src={icon} alt="icon" />
    </li>
  );
};
