"use client";
import React from "react";
import SubHeading from "../shared/sub-heading";
import Heading from "../shared/heading";
import LinkButton from "../ui/link-button";
import Autoplay from "embla-carousel-autoplay";

import { GalleryType } from "@/types";
import GalleryCard from "../shared/gallery-card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { gallery } from "@/data/gallery";

export function GallerySection() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <section>
      <div className="container mt-5 grid gap-12 md:gap-5 ">
        <div className=" text-center">
          <SubHeading content="ATEC GALLERY" />
          <Heading content="Welcome to Memory Lane" />
        </div>
        {/* Carousol part */}
        <div className="container">
          <div className="w-full max-w-xs md:max-w-[650px] md:mr-4 lg:max-w-[1050px] gap-2 lg:ml-28 ">
            <Carousel
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {gallery?.map((gk: GalleryType, index: any) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3 sm:w-auto"
                  >
                    <GalleryCard
                      image={gk.image}
                      title={gk.title}
                      key={index}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-9" />
              <CarouselNext className="-right-9" />
            </Carousel>
          </div>
        </div>

        <div className="text-center mb-4">
          <LinkButton title="See more" />
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
