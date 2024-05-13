"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";
import Link from "next/link";

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

        <NavigationMenuItem>
          <NavigationMenuTrigger>About ATEC</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-2 px-4">
              <Link href="/present-executive-committee" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:text-blue-700 font-semibold"
                  )}
                >
                  Present Executive Committee
                </NavigationMenuLink>
              </Link>

              <Link href="/all-executive-committee" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:text-blue-700 font-semibold"
                  )}
                >
                  All Executive Committee
                </NavigationMenuLink>
              </Link>

              <Link href="/batch-representatives" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:text-blue-700 font-semibold"
                  )}
                >
                  Batch Representatives
                </NavigationMenuLink>
              </Link>

              <Link href="/constitution" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:text-blue-700 font-semibold"
                  )}
                >
                  Constitution
                </NavigationMenuLink>
              </Link>
            </ul>
          </NavigationMenuContent>
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

        <NavigationMenuItem key="membership">
          <NavigationMenuTrigger>Membership</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-2 px-4">
              <Link href="/membership/membership-apply" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:text-blue-700 font-semibold"
                  )}
                >
                  Apply for Membership
                </NavigationMenuLink>
              </Link>

              <Link href="/membership/membership-fee" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent hover:text-blue-700 font-semibold"
                  )}
                >
                  Membership Fee
                </NavigationMenuLink>
              </Link>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
