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
      const target = new Date("06/05/2024 20:29:00");
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
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden m-8 mr-8 font-bold">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600 font-bold">
              <h3>Start Time</h3>
              {moment(eventStartTime).format("h:mm A")}
            </div>
            <div className="mb-4">
              <h3 className="text-gray-600 text-center">June</h3>
              <h1 className="text-gray-600 font-bold">03</h1>
              <p className="text-gray-600 text-center">Friday</p>
            </div>
            <div className="text-red-600 text-center font-bold">
              <h3> End Time</h3>
              {moment(eventEndTime).format("h:mm A")}
            </div>
          </div>

          <div className="timer-wrapper">
            <div className="timer-inner">
              <div className="timer-wrapper">
                <div className="timer-row">
                  <div className="timer-segment h-8 w-20 bg-white">
                    <span className="time">{Math.floor(hours / 10)}</span>
                  </div>
                  <div className="timer-segment h-8 w-20 bg-white">
                    <span className="time">{days % 10}</span>
                    <span className="label p-4 mr-8 text-red">Days</span>
                  </div>
                </div>
              </div>

              <div className="timer-wrapper">
                <div className="timer-row">
                  <div className="timer-segment h-8 w-20 bg-white">
                    <span className="time">{Math.floor(hours / 10)}</span>
                  </div>
                  <div className="timer-segment h-8 w-20 bg-white">
                    <span className="time">{hours % 10}</span>
                    <span className="label p-4 mr-8">Hours</span>
                  </div>
                </div>
              </div>

              <div className="timer-wrapper">
                <div className="timer-row">
                  <div className="timer-segment h-8 w-20 bg-white">
                    <span className="time">{Math.floor(minute / 10)}</span>
                  </div>
                  <div className="timer-segment h-8 w-20 bg-white">
                    <span className="time">{minute % 10}</span>
                    <span className="label p-4 mr-8">Mins</span>
                  </div>
                </div>
              </div>

              <div className="timer-wrapper">
                <div className="timer-row">
                  <div className="timer-segment h-8 w-20 bg-white">
                    <span className="time">{Math.floor(second / 10)}</span>
                  </div>
                  <div className="timer-segment h-8 w-20 bg-white">
                    <span className="time">{second % 10}</span>
                    <span className="label p-4 mr-8">Sec</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-fade-up mt-4  text-center">
            <Button className="h-12 border bg-gradient-to-br from-pink-600/70 to-purple-400/70 text-lg font-bold tracking-wide hover:opacity-70">
              View Registration Fee
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventTimer;
