"use client";
import LinkButton from "../ui/link-button";
import SubHeading from "../shared/sub-heading";
import Heading from "../shared/heading";
import EventCard from "../shared/event-card";
import { EventType } from "@/types";
import { events } from "@/data/events";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import React from "react";

export function EventsSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section
      id="features-section"
      aria-label="features section"
      className="w-full"
    >
      <main className="container mt-5 grid gap-12 md:gap-5">
        <div className="edu-elements-area edu-section-gap text-center">
          <SubHeading content="UPCOMING EVENTS" />
          <Heading content="Your Presence Matters Most" />
        </div>

        <div className="container">
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-xs md:max-w-[650px]"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {events?.map((ev: EventType, index: any) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <EventCard
                      date={ev.date}
                      description={ev.description}
                      image={ev.image}
                      location={ev.location}
                      time={ev.time}
                      title={ev.title}
                      key={index}
                    />
                  </div>
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
      </main>
    </section>
  );
}
