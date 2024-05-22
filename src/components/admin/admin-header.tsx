"use client";
import { getSession } from "@/actions/auth.actions";
import { Icons } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSideBarToggle } from "@/hooks/use-sidebar-toogle";
import { cn } from "@/lib/utils";
import { SessionData } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsList } from "react-icons/bs";
import { IoIosArrowDown, IoIosNotificationsOutline } from "react-icons/io";
import LogoutForm from "../nav/logout-form";
import ThemeToggle from "../theme-toggle";
import moment from "moment";
import { BsCalendar2Check } from "react-icons/bs";
import { BsStopwatch } from "react-icons/bs";
import { Skeleton } from "../ui/skeleton";

const AdminHeader = () => {
  const [session, setSession] = useState<SessionData>({ isLoggedIn: false });
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  const { toggleCollapse, invokeToggleCollapse } = useSideBarToggle();

  const sidebarToggle = () => {
    invokeToggleCollapse();
  };

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession();
      setSession(sessionData);
    };

    fetchSession();

    // Update current date and time every second
    const interval = setInterval(() => {
      setCurrentDate(moment().format("ddd, D MMM YYYY"));
      setCurrentTime(moment().format("HH : mm : ss A"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const headerStyle = cn(
    "bg-sidebar fixed w-full z-[99997] px-4 shadow-sm shadow-slate-500/40",
    {
      ["sm:pl-[15rem]"]: !toggleCollapse,
      ["sm:pl-[5.6rem]"]: toggleCollapse,
    }
  );

  return (
    <header className={headerStyle}>
      <div className="h-16 flex items-center justify-between">
        <button
          onClick={sidebarToggle}
          className="shrink-btn float-right bg-sidebar-muted text-sidebar-muted-foreground hover:bg-foreground hover:text-background ml-3 rounded-md w-[30px] h-[30px] flex items-center justify-center shadow-md shadow-black/10  transition duration-300 ease-in-out"
        >
          <BsList />
        </button>

        {currentDate ? (
          <div className="hidden md:flex items-center justify-center gap-5 bg-accent border rounded-full mx-2 px-5 py-1.5 w-1/2 xl:w-2/5">
            <div className="text-sm font-bold flex justify-center items-center gap-2">
              <BsCalendar2Check />
              {currentDate}
            </div>
            <div className="hidden lg:flex text-sm font-bold  justify-center items-center gap-2">
              <BsStopwatch />
              {currentTime}
            </div>
          </div>
        ) : (
          <Skeleton className="ml-4 w-1/2 xl:w-2/5 h-8 rounded-full" />
        )}

        <div className="flex items-center justify-between gap-1">
          <div className="py-2">
            <IoIosNotificationsOutline size={25} />
          </div>
          <div className="py-2">
            <ThemeToggle />
          </div>
          <div className="py-2">
            <Avatar className="size-9">
              {session?.image ? (
                <AvatarImage
                  src={session?.image}
                  alt={session?.username ?? "user's profile picture"}
                  className="rounded-full"
                />
              ) : (
                <AvatarFallback className="size-9 p-1.5 text-xs capitalize">
                  <Icons.user className="size-5 rounded-full" />
                </AvatarFallback>
              )}
            </Avatar>
          </div>

          <div className="py-2 flex items-center justify-center text-center cursor-pointer">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex justify-center items-center pl-2">
                  <p>Hi, {session?.username || "Guest User"} </p>
                  <IoIosArrowDown size={20} className="mx-2 mt-1" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56 z-[99999] mt-2"
                align="end"
                forceMount
              >
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {session?.username}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {session.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link href="/dashboard/account">
                      <Icons.avatar
                        className="mr-2 size-4"
                        aria-hidden="true"
                      />
                      Account
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link href="/dashboard/settings">
                      <Icons.settings
                        className="mr-2 size-4"
                        aria-hidden="true"
                      />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <LogoutForm />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
