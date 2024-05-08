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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
interface NavigationProps {
  navItems: NavItem[];
  isLoggedIn: boolean;
}

export function Navigation({}: NavigationProps): JSX.Element {
  return (
    <NavigationMenu className="hidden transition-all duration-300 ease-in-out md:flex  ">
      <NavigationMenuList>
        <NavigationMenuItem key="home" asChild>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent hover:text-blue-700 font-semibold"
              )}
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Dropdown menu setup */}

        <NavigationMenuItem
          className="focus:ring-2 focus:ring-red-500"
          key="about"
          asChild
        >
          <Link href="" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
            >
              {/* Dropdown menu */}
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <p className="font-semibold hover:text-blue-700">
                      About ATEC
                    </p>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <span className="hover:text-blue-700 font-semibold ">
                          <Link href="/presentexecutive">
                            Present Executive <br />
                            Commitee
                          </Link>
                        </span>
                      </DropdownMenuItem>

                      <DropdownMenuItem>
                        <span className="hover:text-blue-700 font-semibold">
                          <Link href="/allexecutive">
                            All Executive <br />
                            Commitee
                          </Link>
                        </span>
                      </DropdownMenuItem>

                      <DropdownMenuItem>
                        <span className="hover:text-blue-700 font-semibold">
                          <Link href="/batch">Batch Representative</Link>
                        </span>
                      </DropdownMenuItem>

                      <DropdownMenuItem>
                        <span className="hover:text-blue-700 font-semibold">
                          <Link href="/constitution">Constitution</Link>
                        </span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem key="gallery" asChild>
          <Link href="/gallery" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent hover:text-blue-700 font-semibold"
              )}
            >
              Gellery
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem key="events" asChild>
          <Link href="/events" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent hover:text-blue-700 font-semibold"
              )}
            >
              Event
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <>
          <NavigationMenuItem key="dashboard" asChild>
            <Link href="/dashboard" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent hover:text-blue-700 font-semibold"
                )}
              >
                Dashboard
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem key="membership" asChild>
            <Link href="/membership" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent hover:text-blue-700 font-semibold"
                )}
              >
                Membership
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
