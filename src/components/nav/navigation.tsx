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
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

interface NavigationProps {
  isLoggedIn: boolean;
}

export function Navigation({ isLoggedIn }: NavigationProps): JSX.Element {
  return (
    <NavigationMenu className="hidden transition-all duration-300 ease-in-out md:flex">
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

        {isLoggedIn && (
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                navigationMenuTriggerStyle(),
                "hover:text-blue-700 font-semibold"
              )}
            >
              About ATEC
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="p-2 px-2">
                <Link
                  href="/present-executive-committee"
                  legacyBehavior
                  passHref
                >
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
        )}

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

        {isLoggedIn && (
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

            {/* MemberShip page */}

            <DropdownMenu>
              <DropdownMenuTrigger
                className={cn(
                  navigationMenuTriggerStyle(),
                  "hover:text-blue-700 font-semibold bg-slate-400"
                )}
              >
                Membership
                <ChevronDown
                  className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                  aria-hidden="true"
                />
              </DropdownMenuTrigger>

              <DropdownMenuContent className="pt-3">
                <Link href="/membership-apply" legacyBehavior passHref>
                  <DropdownMenuItem
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "font-semibold grid col-span-1"
                    )}
                  >
                    <span className="hover:text-blue-700">
                      Apply for Membership
                    </span>
                  </DropdownMenuItem>
                </Link>

                <Link href="/membership-fee" legacyBehavior passHref>
                  <DropdownMenuItem
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "font-semibold"
                    )}
                  >
                    <span className="hover:text-blue-700"> Membership Fee</span>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
