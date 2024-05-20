import { FaLocationDot } from "react-icons/fa6";
import EventTimer from "@/components/shared/event-timer";
import Image from "next/image";
import React from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import SubHeading from "@/components/shared/sub-heading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const EventDetails = () => {
  return (
    <section
      id="about-section"
      aria-label="about us section"
      className="w-full mb-10"
    >
      <div className="w-full ">
        <Image
          src="/images/about.jpg"
          alt="banner"
          width={100}
          height={50}
          className="h-screen w-full"
        />
      </div>



      <div className="container ">
        <div className="flex items-center">
          <div className="flex items-center  shadow rounded-full h-16 w-16 bg-teal-400 m-2">
            <p>09:30AM</p>
          </div>
          <div>
            <ArrowRightIcon />
          </div>
          <div className="overflow-hidden shadow-lg mt-6 gap-2 rounded">
            <h1 className="text-center">Event Start</h1>
            <p className="m-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              inventore officia veritatis accusantium nam ipsa cum accusamus?
              Nemo, explicabo consequuntur possimus, enim quia et, omnis minus
              ratione minima atque iusto.
            </p>
          </div>
        </div>
      </div>

      <EventTimer />

      <div className="rounded overflow-hidden shadow-lg mt-6">
        <div className="max-w-lg mx-auto shadow-md rounded-lg text-black overflow-hidden m-8 mr-8 px-6">
          <div className="flex justify-center mt-2 ">
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
      </div>
    </section>
  );
};

export default EventDetails;


