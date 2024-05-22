import React from "react";
import { SideBarMenuItem } from "./sidebar-menu-item";
import { SideNavItem, SideNavItemGroup } from "@/types";
import { useSideBarToggle } from "@/hooks/use-sidebar-toogle";
import { cn } from "@/lib/utils";

type SideBarMenuGroupPropType = {
  menuGroup: SideNavItemGroup;
};

const SideBarMenuGroup = ({ menuGroup }: SideBarMenuGroupPropType) => {
  const { toggleCollapse } = useSideBarToggle();

  const menuGroupTitleSyle = cn(
    "mb-2 opacity-100 capitalize visible text-sm font-medium tracking-widest text-cyan-500 w-full",
    {
      "text-center": toggleCollapse,
    }
  );

  return (
    <div>
      <h3 className={menuGroupTitleSyle}>
        {!toggleCollapse ? menuGroup.title : "..."}
      </h3>

      {menuGroup.menuList?.map((item: SideNavItem, index: number) => {
        return <SideBarMenuItem key={index} item={item} />;
      })}
      <hr className="my-4" />
    </div>
  );
};

export default SideBarMenuGroup;
