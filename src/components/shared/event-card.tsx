import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import { Button } from "../ui/button";

type EventCardPropTypes = {
  title: string;
  date: Date;
  time: string;
  description: string;
  location: string;
  image: string;
};

const EventCard = ({
  title,
  date,
  description,
  image,
  location,
  time,
}: EventCardPropTypes) => {
  return (
    <div className="mx-auto flex items-center justify-center w-[310px] h-[490px]">
      <div className="flex flex-col w-full rounded-md shadow-lg">
        <div className="w-full bg-top bg-cover rounded-t">
          <Image
            alt="event image"
            src={image}
            width={310}
            height={215}
            className="rounded-t-md"
          />
        </div>

        <div className="flex flex-col w-full md:flex-row h-[290px] overflow-hidden">
          <div className="flex flex-row justify-around p-4 font-bold leading-none uppercase bg-[#e74de4a1] dark:bg-[#d676d480] md:rounded-bl-md md:flex-col md:items-center md:justify-center md:w-1/4">
            <div className="md:text-xl">{date.getDate()}</div>
            <div className="md:text-2xl">
              {date.toLocaleString("en", { month: "short" })}
            </div>
            <div className="md:text-xl text-nowrap">{time}</div>
          </div>

          {/* content section */}
          <div className="p-4 font-normal bg-gradient-to-r from-pink-600/10 to-purple-400/10 transition-all duration-1000 ease-out hover:opacity-70 md:hover:-translate-y-2 text-center md:w-3/4">
            <h1
              className={cn(
                "mb-4 text-2xl font-bold leading-none tracking-tight",
                title?.length > 21 ? "truncate" : ""
              )}
            >
              {title}
            </h1>
            <p
              className={cn(
                "leading-normal",
                description?.length > 92 ? "" : ""
              )}
            >
              {description}
            </p>
            <div className=" mt-4">
              <div className="flex items-center justify-center">
                <FaLocationDot className="size-5" />
                <p className="ml-1">{location}</p>
              </div>

              <div className="animate-fade-up mt-4">
                <Button
                  variant="outline"
                  className="h-12 border bg-gradient-to-br from-pink-600/70 to-purple-400/70 text-lg font-bold tracking-wide hover:opacity-70"
                >
                  Get Ticket
                <ArrowRightIcon className="ml-3" />  
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
