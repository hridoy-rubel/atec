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
import Link from "next/link";

export function EventsSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section id="event-section" aria-label="event section" className="w-full">
      <main className="container mt-5 grid gap-12 md:gap-5 lg:gap-4">
        <div className="text-center">
          <SubHeading content="UPCOMING EVENTS" />
          <Heading content="Your Presence Matters Most" />
        </div>

        <div className="container flex justify-center">
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
              {events?.map((item: EventType, index: any) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Link href={`/events/${item?.id}`}>
                      <EventCard
                        date={item.date}
                        description={item.description}
                        image={item.image}
                        location={item.location}
                        time={item.time}
                        title={item.title}
                        key={index}
                      />
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-9" />
            <CarouselNext className="-right-9" />
          </Carousel>
        </div>

        <div className="text-center mt-5">
          <LinkButton title="See more" link="/events" />
        </div>
      </main>
    </section>
  );
}
