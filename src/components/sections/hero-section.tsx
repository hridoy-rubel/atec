import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import LinkButton from "../ui/link-button";

export async function HeroSection() {
  return (
    <section
      id="hero-section"
      aria-label="hero section"
      className="mt-16 w-full md:mt-48"
    >
      <main className="container flex flex-col lg:flex-row-reverse items-center">
        <div className="w-full md:w-1/2 lg:w-2/5">
          <Image
            className="w-4/5 rounded-lg"
            src="/images/atec.png"
            alt="logo png"
            width={350}
            height={350}
          />
        </div>

        <div className="w-full md:w-1/2 lg:w-3/4 md:pl-8 lg:pl-16 relative">
          <div className="border-r-2 border-blue-700 h-1/3 absolute l-1/4 mr-3 top-36"></div>
            <div>
              <h3 className="text-blue-500 font-bold sm:text-lg md:text-xl lg:text-2xl mb-4">
                RISE AS ONE, SHINE FOR ALL
              </h3>
              <h1 className="animate-fade-up font-urbanist text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-4">
                <Balancer>
                  <span className="bg-gradient-to-r from-pink-700 to-purple-500 bg-clip-text font-extrabold text-transparent">
                    Welcome To Atec{""}
                  </span>
                </Balancer>
              </h1>

              <h3 className="max-w-[42rem] animate-fade-up text-muted-foreground sm:text-base md:text-lg lg:text-xl mb-8 mr-12 ms-10">
                <Balancer>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  eius ullam inventore eum reiciendis nesciunt molestias
                  accusantium laudantium in natus exercitationem quibusdam
                  dolores, quos aliquam asperiores doloribus, velit explicabo?
                  Porro. At eius ullam inventore eum reiciendis nesciunt
                  molestias accusantium laudantium in natus exercitationem
                  quibusdam dolores, quos aliquam asperiores doloribus, velit
                  explicabo? Porro.
                </Balancer>
              </h3>

              <LinkButton title="Get Started" />
            </div>
          </div>
        
      </main>
    </section>
  );
}
