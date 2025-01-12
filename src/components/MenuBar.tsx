import { FaApple } from "react-icons/fa";
import { MenuBarItem } from "./MenuBarItem";
import { useEffect, useRef, useState } from "react";

export const MenuBar: React.FC = () => {
  const menuBarItems = [
    {
      label: "File",
      options: [
        "New Finder Window",
        "New Folder",
        "New Folder with Selection",
        "New Smart Folder",
        "Open",
        "Open With",
        "Print",
        "Close Window",
        "Get Info",
        "Rename",
        "Compress",
        "Duplicate",
        "Make Alias",
        "Quick Look",
        "Show Original",
        "Add to Sidebar",
        "Move to Trash",
        "Eject",
        null,
        "Find",
        "Tags...",
      ],
    },
    {
      label: "Edit",
      options: [
        "Undo",
        "Redo",
        "Cut",
        "Copy",
        "Paste",
        "Select All",
        "Show Clipboard",
        "Start Dictation...",
        "Emoji & Symbols",
      ],
    },
    {
      label: "View",
      options: [
        "As Icons",
        "As List",
        "As Columns",
        "As Gallery",
        "Sort By",
        "Clean Up",
        "Clean Up By",
        "Hide Sidebar",
        "Show Preview",
        "Hide Toolbar",
        "Show All Tabs",
        "Show Tab Bar",
        "Show Path Bar",
        "Show Status Bar",
        "Customize Toolbar",
        null,
        "Show View Options",
        "Show Preview Options",
        "Enter Full Screen",
      ],
    },
    {
      label: "Go",
      options: [
        "Back",
        "Forward",
        "Enclosing Folder",
        "Recents",
        "Documents",
        "Desktop",
        "Downloads",
        "Home",
        "Computer",
        "AirDrop",
        "Network",
        "iCloud Drive",
        "Go to Folder",
        "Applications",
        "Utilities",
        "Go to Folder",
        "Connect to Server",
      ],
    },
    {
      label: "Window",
      options: [
        "Minimize",
        "Zoom",
        "Move Window to Left Side of Screen",
        "Move Window to Right Side of Screen",
        "Cycle Through Windows",
        "Show Previous Tab",
        "Show Next Tab",
        "Move Tab to New Window",
        "Merge All Windows",
        "Bring All to Front",
      ],
    },
    {
      label: "Help",
      options: ["Send Feedback", "macOS Help"],
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
            "About This Mac",
            "System Preferences...",
            "App Store...",
            "Recent Items",
            "Force Quit",
            "Sleep",
            "Restart...",
            "Shut Down",
            null,
            "Lock Screen",
            "Log Out User...",
          ]}
          onClick={() => handleMenuBarItemClick(-1)} // Używamy -1 jako indeks dla logo Apple
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
    </div>
  );
};
