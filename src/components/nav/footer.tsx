import { Icons } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { BsTwitterX } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { DoubleArrowRightIcon } from "@radix-ui/react-icons";
import { IoLocationSharp } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";
import { CgMail } from "react-icons/cg";

export function Footer(): JSX.Element {
  return (
    <footer
      id="footer"
      aria-label="footer"
      className="bg-background pb-8 pt-16"
    >
      <div className="container lg:grid lg:grid-cols-2 ">
        <div className="md:flex md:justify-between md:items-center">
          <div className="mt-8 md:flex-1">
            <Image src="/images/logo.png" alt="logo" height={500} width={400} />
          </div>

          <div className="flex flex-col justify-center items-center gap-12 md:flex-1 lg:mb-12">
            <p className="text-center lg:leading-6 ">
              You can be connected with us on the following platform like
              facebook, twitter, pinterest, linkedin. Join us & stay updated...
            </p>
            <div className="flex gap-5">
              <Link
                href={"/"}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ size: "icon", variant: "ghost" }),
                  "rounded-full"
                )}
              >
                <BsFacebook className="size-[28px]" />
              </Link>

              <Link
                href={"/"}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ size: "icon", variant: "ghost" }),
                  "rounded-full"
                )}
              >
                <BsYoutube className="size-[28px]" />
              </Link>

              <Link
                href={"/"}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ size: "icon", variant: "ghost" }),
                  "rounded-full"
                )}
              >
                <BsTwitterX className="size-[28px]" />
              </Link>

              <Link
                href={"/"}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ size: "icon", variant: "ghost" }),
                  "rounded-full"
                )}
              >
                <BsWhatsapp className="size-[28px]" />
              </Link>
            </div>
          </div>
        </div>

        <div className="md:grid md:grid-cols-2">
          <div className="mt-8 md:flex md:justify-center">
            <ul>
              <h1 className="font-bold text-400 mb-5">Useful Links</h1>
              <Link href="/about">
                <li className="flex gap-2 hover:text-blue-600 mb-4 items-center">
                  <DoubleArrowRightIcon />
                  About Us
                </li>
              </Link>

              <Link href="/gallery">
                <li className="flex gap-2 hover:text-blue-600 mb-4 items-center">
                  <DoubleArrowRightIcon />
                  Gallery
                </li>
              </Link>

              <Link href="/events">
                <li className="flex gap-2 hover:text-blue-600 mb-4 items-center">
                  <DoubleArrowRightIcon />
                  Events
                </li>
              </Link>

              <Link href="/membership">
                <li className="flex gap-2 hover:text-blue-600 mb-4 items-center">
                  <DoubleArrowRightIcon />
                  Membership
                </li>
              </Link>
            </ul>
          </div>

          <div className="mt-8 md:flex md:justify-center">
            <ul>
              <h1 className="font-bold text-400 mb-5 ml-6">Contact Info</h1>
              <li className="flex gap-2 mb-4 items-center">
                <IoLocationSharp className="lg:text-3xl md:text-2xl text-xl" />
                Bou Tower (2nd Floor), Akur Takur Para, Zila Sadar Rd, Tangail
              </li>
              <Link href="">
                <li className="flex gap-2 mb-4 hover:text-blue-600 items-center">
                  <MdPhoneInTalk />
                  +88019187690**
                </li>
              </Link>
              <Link href="">
                <li className="flex gap-2 mb-4 hover:text-blue-600 items-center">
                  <MdPhoneInTalk />
                  +88013645690**
                </li>
              </Link>
              <Link href="">
                <li className="flex gap-2 mb-4 hover:text-blue-600 items-center">
                  <CgMail />
                  atecofficial@example.com
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <div className="container flex items-center justify-between mt-8">
        <p className="text-sm text-muted-foreground xl:text-base">
          <Balancer>
            Built in by{" "}
            <Link
              href={"rouzex.com"}
              target="_blank"
              rel="noreferrer"
              className="font-semibold underline-offset-8 transition-all hover:underline hover:opacity-70"
            >
              Newaz, Rouzex, Hazrat, Hridoy & Rubel .
            </Link>
          </Balancer>
        </p>
        <div className="flex items-center justify-center">
          <Link
            href={"https://github.com/Abdur-Razzak-Rouzex"}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ size: "icon", variant: "ghost" }),
              "rounded-full"
            )}
          >
            <Icons.gitHub className="size-[18px]" />
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
