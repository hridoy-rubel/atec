"use client";
import { useSideBarToggle } from "@/hooks/use-sidebar-toogle";
import { cn } from "@/lib/utils";
import { SideNavItem } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BsChevronRight } from "react-icons/bs";

type SideBarMenuItemPropType = {
  item: SideNavItem;
};

export const SideBarMenuItem = ({ item }: SideBarMenuItemPropType) => {
  const { toggleCollapse } = useSideBarToggle();

  const pathname = usePathname();

  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  const inactiveLink = cn(
    "flex items-center min-h-[40px] h-full text-sidebar-foreground py-2 px-4 hover:bg-accent hover:text-accent-foreground rounded-md transition duration-200",
    { ["justify-center"]: toggleCollapse }
  );

  const activeLink = cn("bg-accent text-accent-foreground ");

  const navMenuDropdownItem =
    "text-red py-2 px-4 hover:bg-accent hover:text-accent-foreground transition duration-200 rounded-md";

  const dropdownMenuHeaderLink = cn(inactiveLink, {
    ["bg-sidebar-muted rounded-b-none"]: subMenuOpen,
  });

  return (
    <>
      {item.submenu ? (
        <div className="min-w-[18px]">
          <a
            className={`${dropdownMenuHeaderLink} ${
              pathname.includes(item.path) ? activeLink : ""
            }`}
            onClick={toggleSubMenu}
          >
            <div className="min-w-[20px]">{item.icon}</div>
            {!toggleCollapse && (
              <>
                <span className="ml-3 text-base leading-6">{item.title}</span>
                <BsChevronRight
                  className={`${
                    subMenuOpen ? "rotate-90" : ""
                  } ml-auto stroke-2 text-xs`}
                />
              </>
            )}
          </a>
          {subMenuOpen && !toggleCollapse && (
            <div className="bg-sidebar-muted border-l-4">
              <div className="grid gap-y-2 px-10 leading-5 py-3">
                {item.subMenuItems?.map((subItem, idx) => {
                  return (
                    <Link
                      key={idx}
                      href={subItem.path}
                      className={`${navMenuDropdownItem} ${
                        subItem.path === pathname
                          ? " text-sidebar-muted-foreground "
                          : " text-sidebar-foreground"
                      }`}
                    >
                      <span>{subItem.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      ) : (
        <Link
          href={item.path}
          className={`${inactiveLink} ${
            item.path === pathname ? activeLink : ""
          }`}
        >
          <div className="min-w-[20px]">{item.icon}</div>
          {!toggleCollapse && (
            <span className="ml-3 leading-6">{item.title}</span>
          )}
        </Link>
      )}
    </>
  );
};
