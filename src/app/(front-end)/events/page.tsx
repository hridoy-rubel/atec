import EventCard from "@/components/shared/event-card";
import Heading from "@/components/shared/heading";
import { events } from "@/data/events";
import { EventType } from "@/types";
import Link from "next/link";

const EventsPage = () => {
  return (
    <section aria-label="event page" className="w-full mb-10">
      <div
        className="h-20 md:h-36 lg:h-48 bg-cover flex items-center justify-center mb-20"
        style={{
          backgroundImage: "url('/images/event-bg.jpg')",
        }}
      >
        {/* <div className="flex flex-row-reverse  bg-zinc-500 p-10 gap-4 rounded-xl">
          <div className="bg-red-500 p-3 rounded-sm">1</div>
          <div className="bg-red-500 p-3  rounded-sm">2</div>
          <div className="bg-red-500 p-3  rounded-sm">3</div>
        </div> */}
        <Heading content="ATEC Events" />
      </div>

      <main className="container mt-5 grid gap-12 md:gap-5 lg:gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {events.map((item: EventType, index: number) => (
            <div key={index}>
              <Link href={`/events/${item?.id}`}>
                <EventCard
                  date={item.date}
                  description={item.description}
                  image={item.image}
                  location={item.location}
                  time={item.time}
                  title={item.title}
                />
              </Link>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default EventsPage;
