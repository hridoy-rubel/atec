import { Icons } from "@/components/icons";
import ThemeToggle from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export function Footer(): JSX.Element {
  return (
    <footer
      id="footer"
      aria-label="footer"
      className="grid gap-8 bg-background pb-8 pt-16"
    >
      <div className="container">something here</div>

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
