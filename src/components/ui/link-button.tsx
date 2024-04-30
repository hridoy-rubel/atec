import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

type LinkButtonPropTypes = {
  title: string;
  size?: "default" | "sm" | "lg" | "icon";
  link?: string;
  icon?: JSX.Element;
};

const LinkButton = ({
  title,
  size = "lg",
  link = "/register",
}: LinkButtonPropTypes) => {
  return (
    <div className="animate-fade-up">
      <Link
        href={link}
        className={cn(
          buttonVariants({ size: size }),
          "transition-all duration-1000 ease-out md:hover:-translate-y-2"
        )}
      >
        {title}
        <ArrowRightIcon className="ml-3" />
      </Link>
    </div>
  );
};

export default LinkButton;
