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
      <div>
        <div className="edu-elements-area edu-section-gap text-center">
          <SubHeading content="ATEC GALLERY" />
          <Heading content="Welcome to Memory Lane" />
        </div>
        {/* Carousol part */}
        <div className="container">
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-xs md:max-w-[650px] md:ml-6 lg:max-w-[1050px] gap-2 lg:ml-10"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {gallery?.map((gk: GalleryType, index: any) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <GalleryCard image={gk.image} title={gk.title} key={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-9" />
            <CarouselNext className="-right-9" />
          </Carousel>
        </div>

        <div className="text-center">
          <LinkButton title="See more" />
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
