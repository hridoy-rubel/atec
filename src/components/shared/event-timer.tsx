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
      <div className="rounded overflow-hidden shadow-lg mt-10 ">
        <div className="container flex items-center justify-between ">
          <div className="text-sm text-gray-600 font-bold">
            <h3>Start Time</h3>
            {moment(eventStartTime).format("h:mm A")}
          </div>

          <div className="mb-4 ">
            <h3 className="text-blue-700 text-center text-xl ">June</h3>
            <h1 className="text-red-600 font-bold text-xl">03</h1>
            <p className="text-blue-700 text-center text-xl">Friday</p>
          </div>
          <div className="text-red-600 text-center font-bold">
            <h3> End Time</h3>
            {moment(eventEndTime).format("h:mm A")}
          </div>
        </div>

        <div className="flex text-lg p-2 rounded-lg z-10">
          <div className=" shadow rounded-lg overflow-hidden m-8 mr-8 font-bold p-3">
            <div className="">
              <span className="time">{Math.floor(days / 10)}</span>
              <span className="mr-3"> </span>
              <span className="text-lg">{days % 10}</span>
            </div>
            <div className="timer-label">
              <span className=" text-center">Days</span>
            </div>
          </div>

          <div className="timer-card max-w-lg mx-auto shadow-md rounded-lg overflow-hidden m-8 mr-8 font-bold p-2">
            <div className="timer-value">
              <span className="text-lg">{Math.floor(hours / 10)}</span>
              <span className="mr-3"> </span>
              <span className="text-lg">{hours % 10}</span>
            </div>
            <div className="timer-label">
              <span className="label">Hours</span>
            </div>
          </div>
          <div className="timer-card max-w-lg mx-auto shadow-md rounded-lg overflow-hidden m-8 mr-8 font-bold p-2">
            <div className="timer-value">
              <span className="time">{Math.floor(minute / 10)}</span>
              <span className="mr-3"> </span>
              <span className="text-lg">{minute % 10}</span>
            </div>
            <div className="timer-label">
              <span className="label">Mins</span>
            </div>
          </div>

          <div className="timer-card max-w-lg mx-auto shadow-md rounded-lg overflow-hidden m-8 mr-8 font-bold p-2">
            <div className="timer-value">
              <span className="text-lg">{Math.floor(second / 10)}</span>
              <span className="mr-3"> </span>
              <span className="text-lg">{second % 10}</span>
            </div>
            <div className="timer-label">
              <span className="label">Sec</span>
            </div>
          </div>
        </div>
        <div className="animate-fade-up mt-2  text-center mb-2">
          <Button className="h-12 border font-bold tracking-wide hover:opacity-70 ">
            View Registration Fee
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventTimer; 

/*

<div className="container grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
<div className="relative before:absolute before:inset-3 before:ml-5 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-slate-600 before:to-transparent mt-8">
  <div className="relative flex items-center">
    <div className="flex items-center justify-center w-16 h-16 rounded-full border  bg-yellow-600 shadow">
      <p> 09:00AM </p>
    </div>
    <p>
      <ArrowRightIcon />
    </p>

    <div className=" p-8 rounded border shadow">
      <div className="flex items-center justify-center mb-1">
        <div className="font-bol">Event Start</div>
      </div>
      <div className="text-slate-500">
        Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
        morbi blandit cursus risus.
      </div>
    </div>
  </div>
</div>

<div className="relative before:absolute before:inset-3 before:ml-5 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-slate-600 before:to-transparent mt-8">
  <div className="relative flex items-center">
    <div className="flex items-center justify-center w-16 h-16 rounded-full border  bg-yellow-600 shadow">
      <p> 09:00AM </p>
    </div>
    <p>
      <ArrowRightIcon />
    </p>

    <div className=" p-8 rounded border shadow">
      <div className="flex items-center justify-center mb-1">
        <div className="font-bol">Event Start</div>
      </div>
      <div className="text-slate-500">
        Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
        morbi blandit cursus risus.
      </div>
    </div>
  </div>
</div>

<div className="relative before:absolute before:inset-3 before:ml-5 before:-translate-x-px before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-slate-600 before:to-transparent mt-8">
  <div className="relative flex items-center">
    <div className="flex items-center justify-center w-16 h-16 rounded-full border  bg-yellow-600 shadow">
      <p> 09:00AM </p>
    </div>
    <p>
      <ArrowRightIcon />
    </p>

    <div className=" p-8 rounded border shadow">
      <div className="flex items-center justify-center mb-1">
        <div className="font-bol">Event Start</div>
      </div>
      <div className="text-slate-500">
        Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
        morbi blandit cursus risus.
      </div>
    </div>
  </div>
</div>

<EventTimer />

<div className="max-w-lg mx-auto shadow-md rounded-lg text-black overflow-hidden m-8 mr-8 px-6">
  <div className="flex justify-center mt-4 ">
    <SubHeading content="Contact Person" />
  </div>
  <div className="container flex max-w-lg mx-auto shadow-md bg-gradient-to-r from-green-400 to-blue-500 rounded-lg sm:bg-slate-300 text-black overflow-hidden m-8">
    <div className="mt-8">
      <Avatar>
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
    <div className="m-4">
      <h1>Name: Md Hazrat Ali</h1>
      <h1>Designation: execative director</h1>
      <h1>Phone Number: 018******66</h1>
    </div>
  </div>

  <div className="container flex max-w-lg mx-auto bg-gradient-to-r from-pink-600 to-green-500 shadow-md rounded-lg sm:bg-slate-300 text-black overflow-hidden m-8">
    <div className="mt-8">
      <Avatar>
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
    <div className="m-4">
      <h1>Name:</h1>
      <h1>Designation:</h1>
      <h1>Phone Number:</h1>
    </div>
  </div>

  <div className="container flex max-w-lg mx-auto bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-md rounded-lg sm:bg-slate-300 text-black overflow-hidden m-8">
    <div className="mt-8">
      <Avatar>
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
    <div className="m-4">
      <h1>Name:</h1>
      <h1>Designation:</h1>
      <h1>Phone Number:</h1>
    </div>
  </div>
</div>
</div>  */
