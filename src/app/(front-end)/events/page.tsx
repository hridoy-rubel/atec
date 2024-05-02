import SubHeading from "@/components/shared/sub-heading";
import React from "react";
import EventCard from "@/components/shared/event-card"; 
import { EventType } from "@/types";
import { events } from "@/data/events";

const EventsPage = () => {
  return (
    <section id="event-section" aria-label="event section" className="w-full">
      <div
        className="h-20 md:h-24 lg:h-36 bg-cover bg-center flex items-center justify-center mb-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      >
        <h1 className="font-bold text-yellow-400"><SubHeading content="Welcome To Events Section"/></h1>
        
      </div>

      <main className="container mt-5 grid gap-12 md:gap-5 lg:gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
          {events.map((ev: EventType, index: number) => (
            <div key={index}>
              <EventCard
                date={ev.date}
                description={ev.description}
                image={ev.image}
                location={ev.location}
                time={ev.time}
                title={ev.title}
              />
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default EventsPage;
