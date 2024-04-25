import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

type LinkButtonPropTypes = {
  title: string;
};

const LinkButton = ({ title }: LinkButtonPropTypes) => {
  return (
    <div className="animate-fade-up">
      <Link
        href="/register"
        className={cn(
          buttonVariants({ size: "lg" }),
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
