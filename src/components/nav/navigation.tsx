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
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContent } from "../ui/dropdown-menu";

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
              <div className="">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <p className="font-semibold hover:text-blue-700 flex gap-1 cursor-pointer">
                      About ATEC
                      <svg
                        className="mt-1"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </p>
                  </DropdownMenuTrigger>

                  {/* Dropdown menu items */}
                  <DropdownMenuContent>
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <Link href="/present-executive-committee" passHref>
                          <span className="hover:text-blue-700 font-semibold block px-4 py-2">
                            Present Executive <br />
                            Committee
                          </span>
                        </Link>
                      </DropdownMenuItem>

                      <DropdownMenuItem>
                        <Link href="/all-executive-committee" passHref>
                          <span className="hover:text-blue-700 font-semibold block px-4 py-2">
                            All Executive <br />
                            Committee
                          </span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/batch-representatives" passHref>
                          <span className="hover:text-blue-700 font-semibold block px-4 py-2">
                            Batch Representatives
                          </span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/constitution" passHref>
                          <span className="hover:text-blue-700 font-semibold block px-4 py-2">
                            Constitution
                          </span>
                        </Link>
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
