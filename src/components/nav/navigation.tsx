"use client";

import * as React from "react";
import Link from "next/link";
import type { NavItem } from "@/types";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface NavigationProps {
  navItems: NavItem[];
  isLoggedIn: boolean;
}

export function Navigation({
  navItems,
  isLoggedIn,
}: NavigationProps): JSX.Element {
  return (
    <NavigationMenu className="hidden transition-all duration-300 ease-in-out md:flex">
      <NavigationMenuList>
        {navItems.map((item) => (
          <NavigationMenuItem key={item.title} asChild>
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
              >
                {item.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}

        {isLoggedIn && (
          <>
            <NavigationMenuItem key="dashboard" asChild>
              <Link href="/dashboard" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
                >
                  Dashboard
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem key="membership" asChild>
              <Link href="/membership" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
                >
                  Membership
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
