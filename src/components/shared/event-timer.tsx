"use client";
import { useEffect, useState } from "react";
import moment from "moment";
import { Button } from "@/components/ui/button";

const EventTimer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [currentTime, setCurrentTime] = useState(moment().format("HH:mm:ss"));
  const eventStartTime = moment().set({
    month: 6,
    date: 3,
    hour: 17,
    minute: 0,
  });

  const eventEndTime = moment().set({
    month: 6,
    date: 3,
    hour: 23,
    minute: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const target = new Date("06/06/2024 20:29:00");
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinute(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSecond(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= m) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="event-section" aria-label="event section" className="w-full">
      <div className="rounded overflow-hidden shadow-lg mt-10 dark:bg-[#2e2e2e]">
        <div className="container flex items-center justify-between ">
          <div className="">
            <h3>Start Time</h3>
            {moment(eventStartTime).format("h:mm A")}
          </div>

          <div className="mb-4">
            <h3 className="">June</h3>
            <h1 className="">06</h1>
            <p className="">Friday</p>
          </div>
          <div className="text-center">
            <h3> End Time</h3>
            {moment(eventEndTime).format("h:mm A")}
          </div>
        </div>

        <div className="flex p-1 rounded-lg z-10">
          <div className="timer-card max-w-lg mx-auto shadow-2xl rounded-lg overflow-hidden p-2 m-2">
            <div className="">
              <span className="time">{Math.floor(days / 10)}</span>
              <span className="mr-3"> </span>
              <span className="">{days % 10}</span>
            </div>
            <div className="timer-label">
              <span className=" text-center">Days</span>
            </div>
          </div>

          <div className="timer-card max-w-lg mx-auto shadow-2xl rounded-lg overflow-hidden p-2 m-2">
            <div className="timer-value">
              <span className="">{Math.floor(hours / 10)}</span>
              <span className="mr-3"> </span>
              <span className="">{hours % 10}</span>
            </div>
            <div className="timer-label">
              <span className="label">Hours</span>
            </div>
          </div>
          <div className="timer-card max-w-lg mx-auto shadow-2xl rounded-lg overflow-hidden p-2 m-2">
            <div className="timer-value">
              <span className="time">{Math.floor(minute / 10)}</span>
              <span className="mr-3"> </span>
              <span className="">{minute % 10}</span>
            </div>
            <div className="timer-label">
              <span className="label">Mins</span>
            </div>
          </div>

          <div className="timer-card max-w-lg mx-auto shadow-2xl rounded-lg overflow-hidden p-2 m-2">
            <div className="timer-value">
              <span className="">{Math.floor(second / 10)}</span>
              <span className="mr-3"> </span>
              <span className="">{second % 10}</span>
            </div>
            <div className="timer-label">
              <span className="label">Sec</span>
            </div>
          </div>
        </div>
        <div className="animate-fade-up mt-2  text-center mb-2">
          <Button className="h-12 border font-bold tracking-wide hover:opacity-70">
            View Registration Fee
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventTimer; 
