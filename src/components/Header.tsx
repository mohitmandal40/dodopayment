"use client";

import {
  Bell,
  Command,
  Menu,
  NotebookText,
  RotateCcw,
  Search,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

import { useState } from "react";

const Header: React.FC<{ toggleNotificationBar: () => void }> = ({
  toggleNotificationBar,
}) => {
  const [value, setValue] = useState("");
  const { theme, setTheme } = useTheme();

  const router = usePathname();
  const currentPath = router.replace(/\//g, " / ").replace(/^\s*/, "").trim();

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <div className="flex justify-between px-7 py-5">
      <div className="hidden sm:block">pages {currentPath}</div>
      <div className="flex gap-5 items-center w-full sm:w-auto justify-between">
        <div className="relative w-full sm:w-auto">
          <input
            className="py-1 px-2 pl-8 outline-b-black bg-[rgba(28,28,28,0.05)] rounded-md w-full sm:w-auto"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search"
            type="text"
            name="searchTerm"
            id="searchTerm"
          />
          <Search className="absolute left-2 top-[50%] transform -translate-y-1/2 inline size-4 text-[rgba(28,28,28,0.2)]" />
          <Command className="absolute right-2 top-[50%] transform -translate-y-1/2 inline size-5 text-[rgba(28,28,28,0.2)]" />
        </div>
        <div className="flex gap-2">
          <Sun
            className={`size-6 p-1 cursor-pointer ${
              theme === "dark" ? "stroke-[#ffc658] fill-[#ffc658]" : ""
            }`}
            onClick={toggleTheme}
          />
          <RotateCcw className="size-6 p-1 cursor-pointer sm:block" />
          <Bell className="size-6 p-1 cursor-pointer sm:block" />
          <NotebookText
            className="size-6 p-1 cursor-pointer hidden sm:block"
            onClick={toggleNotificationBar}
          />
        </div>
        <Menu className="sm:hidden" />
      </div>
    </div>
  );
};

export default Header;
