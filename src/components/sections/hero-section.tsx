import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import LinkButton from "../ui/link-button";
import Heading from "../shared/heading";
import SubHeading from "../shared/sub-heading";

export async function HeroSection() {
  return (
    <section
      id="hero-section"
      aria-label="hero section"
      className="mt-8 w-full md:mt-24"
    >
      <main className="container flex flex-col items-center gap-8 lg:flex-row-reverse lg:gap-0">
        <div className="w-full lg:w-5/12 flex justify-center">
          <Image
            className="w-4/5 rounded-lg"
            src="/images/atec.png"
            alt="atec logo"
            width={350}
            height={350}
          />
        </div>

        <div className="w-full lg:w-7/12 md:pl-8 lg:pl-16 text-center lg:text-left">
          <div>
            <SubHeading content="RISE AS ONE, SHINE FOR ALL" />
            <Heading content="Welcome To ATEC" />

            <div className="relative">
              <div className="border-r-4 border-blue-700 h-4/6 hidden ml-5 absolute lg:block lg:mt-8 xl:mt-6 "></div>{" "}
              <h3 className="max-w-[42rem] animate-fade-up text-muted-foreground sm:text-base md:text-lg lg:text-xl mb-8 mr-12 ms-10">
                <Balancer>
                  The life of cadets is not just a 6 years journey that they
                  spend within the boundary of Cadet College. Cadetship becomes
                  a life-long journey. The identity they acquire and the
                  fraternity and bonding they develop remain with them until the
                  last day of their life. We the excadets of Tangail, to nourish
                  this eternal fraternity of cadethood formed this association.
                </Balancer>
              </h3>
            </div>

            <LinkButton title="Become A Member" />
          </div>
        </div>
      </main>
    </section>
  );
}
