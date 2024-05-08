"use client";

import { useSideBarToggle } from "@/hooks/use-sidebar-toogle";
import { cn } from "@/lib/utils";
import { SideNavItemGroup } from "@/types";
import { useEffect, useState } from "react";
import { SIDENAV_ITEMS } from "./side-nav-items";
import SideBarLogo from "./sidebar-logo";
import SideBarMenuGroup from "./sidebar-menu-group";

const Sidebar = () => {
  const [mounted, setMounted] = useState(false);
  const { toggleCollapse } = useSideBarToggle();

  useEffect(() => setMounted(true), []);

  return (
    <aside
      className={cn(
        " sidebar overflow-y-auto overflow-x-auto fixed bg-sidebar h-full shadow-sm shadow-slate-500/40 transition duration-300 ease-in-out z-[99999]",
        {
          "w-[15rem]": !toggleCollapse,
          "sm:w-[5.4rem] sm:left-0 left-[-100%]": toggleCollapse,
        }
      )}
    >
      <div className="sidebar-top relative flex items-center px-3.5 py-5">
        {mounted && <SideBarLogo />}
        <h3
          className={cn(
            "pl-2 font-bold text-2xl min-w-max text-sidebar-foreground",
            { hidden: toggleCollapse }
          )}
        >
          Dashboard
        </h3>
      </div>
      <nav className="flex flex-col gap-2 transition duration-300 ease-in-out">
        <div className="flex flex-col gap-2 px-4">
          {SIDENAV_ITEMS.map((item: SideNavItemGroup, idx) => (
            <SideBarMenuGroup key={idx} menuGroup={item} />
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
