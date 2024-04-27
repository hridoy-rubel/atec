import Image from "next/image";
import LinkButton from "../ui/link-button";
import SubHeading from "../shared/sub-heading";
import Heading from "../shared/heading";
import EventCard from "../shared/event-card";
import { EventType } from "@/types";
import { events } from "@/data/events";

export function EventsSection() {
  return (
    <section
      id="features-section"
      aria-label="features section"
      className="w-full"
    >
      <main className="container mt-5 grid gap-12">
        <div className="edu-elements-area edu-section-gap text-center">
          <SubHeading content="UPCOMING EVENTS" />
          <Heading content="Your Presence Matters Most" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {events?.map((ev: EventType, index: any) => (
            <EventCard
              date={ev.date}
              description={ev.description}
              image={ev.image}
              location={ev.location}
              time={ev.time}
              title={ev.title}
              key={index}
            />
          ))}
        </div>
        <div className="mt-12">
          <LinkButton title="See more" />
        </div>
      </main>
    </section>
  );
}
