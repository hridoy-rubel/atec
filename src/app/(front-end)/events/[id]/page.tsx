"use client";
import { useEffect, useState } from "react";
import moment from "moment";
import Image from "next/image";
import card from "../../.././../../public/images/card2.jpg";
import { Button } from "@/components/ui/button";

const EventDetails = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [currentTime, setCurrentTime] = useState(moment().format("HH:mm:ss"));
  const eventStartTime = moment().set({
    month: 5,
    date: 6,
    hour: 17,
    minute: 0,
  }); // Event start time: May 10th, 5:00 PM

  const eventEndTime = moment().set({
    month: 5,
    date: 6,
    hour: 23,
    minute: 0,
  }); // Event end time: May 10th, 9:00 PM

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

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="w-full h-screen">
        <Image
          src="/images/card2.jpg"
          alt="banner"
          width={100}
          height={50}
          className="h-1/2 w-full"
        />
      </div>
      
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden m-8 mr-8">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600 font-bold">
              <h3>Start Time</h3>
              {moment(eventStartTime).format("h:mm A")}
            </div>
            <div className="mb-4">
              <h3 className="text-gray-600 text-center">June</h3>
              <h1 className="text-gray-600 font-bold">05</h1>
              <p className="text-gray-600 text-center">Friday</p>
            </div>
            <div className="text-gray-600 text-center font-bold">
              <h3> End Time:</h3>
              {moment(eventEndTime).format("h:mm A")}
            </div>
          </div>

          <div className="container flex justify-center m-2 gap-6 p-4 bg-red-300 shadow rounded">
            <div className="text-gray-600 text-center">
              <p className="text-gray-600">{days} </p>
              <span className="text-gray-600">days,</span>
            </div>
            <div className="text-gray-600 text-center">
              <p className="text-gray-600">{hours}:</p>
              <span className="text-gray-600">hours,</span>
            </div>

            <div className="text-gray-600 text-center">
              <p className="text-gray-600">{minute}: </p>
              <span className="text-gray-600">minutes,</span>
            </div>

            <div className="text-gray-600 text-center">
              <p className="text-gray-600">{second} seconds</p>
              <span className="text-gray-600">seconds</span>
            </div>
          </div>

          {/* <p className="text-gray-600 text-center">
            Current Time: {currentTime}
          </p> */}

          <div className="animate-fade-up mt-4  text-center">
            <Button className="h-12 border bg-gradient-to-br from-pink-600/70 to-purple-400/70 text-lg font-bold tracking-wide hover:opacity-70">
              View Registration Fee
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
