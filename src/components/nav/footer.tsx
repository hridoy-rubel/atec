import { Icons } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { DoubleArrowRightIcon } from "@radix-ui/react-icons";
import { IoLocationSharp } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";
import { CgMail } from "react-icons/cg";

export function Footer(): JSX.Element {
  return (
    <footer
      id="footer"
      aria-label="footer"
      className="grid gap-8 bg-border pb-8 pt-16"
    >
      <div className="container  lg:flex bg-border justify-between">
        <div className="ml-10 mb-10 lg:mr-14">
          <Image src="/images/logo.png" alt="logo" height={500} width={400} />
        </div>
        <div className="md:mr-10 lg:mr-20">
          <p className="font-normal leading-8 mb-12 descri">
            You can be connected with us on the following <br />
            platform like facebook, twitter, pinterest, linkedin. Join us & stay
            updated...
          </p>
          <span className="flex gap-5 pb-8">
            <FaFacebook className="cursor-pointer h-10 w-10  hover:text-blue-600  bg-slate-400 rounded" />

            <FaYoutube className="cursor-pointer hover:text-blue-600 h-10 w-10 bg-slate-400  rounded" />

            <FaTwitterSquare className="cursor-pointer hover:text-blue-600 h-10 w-10 bg-slate-400 rounded" />

            <FaSquareWhatsapp className="cursor-pointer hover:text-blue-600 h-10 w-10 bg-slate-400 rounded" />
          </span>
        </div>

        <div className="md:mr-10 lg:mr-20">
          <ul className="mb-10">
            <h1 className="font-bold text-400 pb-10">Useful Links</h1>
            <Link href="/about">
              <li className="flex gap-2 hover:text-blue-600 pb-6">
                <DoubleArrowRightIcon />
                About Us
              </li>
            </Link>

            <Link href="/gallery">
              <li className="flex gap-2 hover:text-blue-600 pb-6">
                <DoubleArrowRightIcon />
                Gallery
              </li>
            </Link>

            <Link href="/events">
              <li className="flex gap-2 hover:text-blue-600 pb-6">
                <DoubleArrowRightIcon />
                Events
              </li>
            </Link>

            <Link href="/membership">
              <li className="flex gap-2 hover:text-blue-600 pb-6">
                <DoubleArrowRightIcon />
                Membership
              </li>
            </Link>
          </ul>
        </div>
        <div className="md:mr-10">
          <ul>
            <h1 className="font-bold text-400 pb-10">Contact Info</h1>
            <li className="flex gap-2 pb-6">
              <IoLocationSharp />
              Bou Tower (2nd Floor), Akur Takur Para, Zila Sadar Rd, Tangail
            </li>
            <Link href="">
              <li className="flex gap-2 pb-6 hover:text-blue-600">
                <MdPhoneInTalk />
                +88019187690**
              </li>
            </Link>
            <Link href="">
              <li className="flex gap-2 pb-6 hover:text-blue-600">
                <MdPhoneInTalk />
                +88013645690**
              </li>
            </Link>
            <Link href="">
              <li className="flex gap-2 pb-6 hover:text-blue-600">
                <CgMail />
                atecofficial@example.com
              </li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="container flex items-center justify-between">
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
