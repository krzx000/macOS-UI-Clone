import { FaApple } from "react-icons/fa";
import { MenuBarItem } from "./MenuBarItem";
import { useEffect, useRef, useState } from "react";

import { ICONS } from "../utils/assets";
import dateFormat from "dateformat";
import { TrailingItem } from "./TrailingItem";
export const MenuBar: React.FC = () => {
  const menuBarItems = [
    {
      label: "File",
      options: [
        { label: "New Finder Window", active: true },
        { label: "New Folder", active: true },
        { label: "New Folder with Selection", active: false },
        { label: "New Smart Folder", active: true },
        { label: "Open", active: false },
        { label: "Open With", active: false },
        { label: "Print", active: false },
        { label: "Close Window", active: false },
        { label: "Get Info", active: true },
        { label: "Rename", active: false },
        { label: "Compress", active: false },
        { label: "Duplicate", active: false },
        { label: "Make Alias", active: false },
        { label: "Quick Look", active: false },
        { label: "Show Original", active: false },
        { label: "Add to Sidebar", active: false },
        { label: "Move to Trash", active: false },
        { label: "Eject", active: false },
        null,
        { label: "Find", active: true },
        { label: "Tags...", active: false },
      ],
    },
    {
      label: "Edit",
      options: [
        { label: "Undo", active: false },
        { label: "Redo", active: false },
        { label: "Cut", active: false },
        { label: "Copy", active: false },
        { label: "Paste", active: false },
        { label: "Select All", active: false },
        { label: "Show Clipboard", active: true },
        { label: "Start Dictation...", active: true },
        { label: "Emoji & Symbols", active: true },
      ],
    },
    {
      label: "View",
      options: [
        { label: "As Icons", active: false },
        { label: "As List", active: false },
        { label: "As Columns", active: false },
        { label: "As Gallery", active: false },
        { label: "Sort By", active: true },
        { label: "Clean Up", active: false },
        { label: "Clean Up By", active: false },
        { label: "Hide Sidebar", active: false },
        { label: "Show Preview", active: false },
        { label: "Hide Toolbar", active: false },
        { label: "Show All Tabs", active: false },
        { label: "Show Tab Bar", active: false },
        { label: "Show Path Bar", active: false },
        { label: "Show Status Bar", active: false },
        { label: "Customize Toolbar", active: false },
        null,
        { label: "Show View Options", active: false },
        { label: "Show Preview Options", active: false },
        { label: "Enter Full Screen", active: true },
      ],
    },
    {
      label: "Go",
      options: [
        { label: "Back", active: false },
        { label: "Forward", active: false },
        { label: "Enclosing Folder", active: true },
        { label: "Recents", active: true },
        { label: "Documents", active: true },
        { label: "Desktop", active: true },
        { label: "Downloads", active: true },
        { label: "Home", active: true },
        { label: "Computer", active: true },
        { label: "AirDrop", active: true },
        { label: "Network", active: true },
        { label: "iCloud Drive", active: true },
        { label: "Go to Folder", active: true },
        { label: "Applications", active: true },
        { label: "Utilities", active: true },
        { label: "Go to Folder", active: true },
        { label: "Connect to Server", active: true },
      ],
    },
    {
      label: "Window",
      options: [
        { label: "Minimize", active: false },
        { label: "Zoom", active: false },
        { label: "Move Window to Left Side of Screen", active: false },
        { label: "Move Window to Right Side of Screen", active: false },
        { label: "Cycle Through Windows", active: true },
        { label: "Show Previous Tab", active: false },
        { label: "Show Next Tab", active: false },
        { label: "Move Tab to New Window", active: false },
        { label: "Merge All Windows", active: false },
        { label: "Bring All to Front", active: true },
      ],
    },
    {
      label: "Help",
      options: [
        { label: "Send Feedback", active: true },
        { label: "macOS Help", active: true },
      ],
    },
  ];

  const menuBarRef = useRef<HTMLDivElement>(null);

  const [activeMenuBarItem, setActiveMenuBarItem] = useState<number | null>(null);

  const handleMenuBarItemClick = (index: number) => {
    setActiveMenuBarItem(index);
  };

  const handleMenuBarItemMouseEnter = (index: number) => {
    if (activeMenuBarItem === null) return;
    setActiveMenuBarItem(index);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuBarRef.current && !menuBarRef.current.contains(event.target as Node)) {
      setActiveMenuBarItem(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuBarRef} className="w-full h-6 flex justify-between bg-white/50 backdrop-blur-[50px]">
      <ul className="flex px-1 ml-1">
        <MenuBarItem
          icon={<FaApple fontSize={"16px"} color="black" className="z-20" />}
          options={[
            { label: "About This Mac", active: true },
            { label: "System Preferences...", active: true },
            { label: "App Store...", active: true },
            { label: "Recent Items", active: true },
            { label: "Force Quit", active: true },
            null,
            { label: "Sleep", active: true },
            { label: "Restart...", active: true },
            { label: "Shut Down", active: true },
          ]}
          onClick={() => handleMenuBarItemClick(-1)}
          active={activeMenuBarItem === -1}
        />
        {menuBarItems.map((item, index) => (
          <MenuBarItem
            key={index}
            label={item.label}
            options={item.options}
            onClick={() => handleMenuBarItemClick(index)}
            onMouseEnter={() => handleMenuBarItemMouseEnter(index)}
            active={activeMenuBarItem === index}
          />
        ))}
      </ul>

      <div className="flex justify-center items-center h-full">
        <ul className="flex items-center h-full">
          <TrailingItem icon={ICONS.MenuBar.WiFi} />
          <TrailingItem icon={ICONS.MenuBar.Search} />
          <TrailingItem icon={ICONS.MenuBar.User} />
          <TrailingItem icon={ICONS.MenuBar.ControlPanel} />
        </ul>
        <div className="px-2.5 font-semibold text-sm select-none">
          {dateFormat(new Date(), "ddd mmm dd h:MM TT")}
        </div>
      </div>
    </div>
  );
};
