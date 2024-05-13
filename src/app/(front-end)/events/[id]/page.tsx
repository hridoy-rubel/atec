import { FaLocationDot } from "react-icons/fa6";
import EventContactCard from "@/components/shared/event-contact-card";
import EventTimer from "@/components/shared/event-timer";
import Image from "next/image";
import EventJourney from "@/components/shared/event-journey";
import React from 'react';


const EventDetails = () => {
  const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: -34.397,
    lng: 150.644
  };

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
      <div className="mt-8">
      <EventJourney />
      </div>
     
      <EventTimer />
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg sm:bg-white text-black overflow-hidden m-8 mr-8 ">
        <div className="p-4">
          <h2 className="font-bold mb-2">Location</h2>
          <div className="flex items-center justify-center">
            <FaLocationDot className="size-8 mb-10" />
            <p className="ml-2">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              suscipit iure vitae distinctio et tempore perferendis sapiente
              dolore quae eligendi?
            </p>
          </div>
        </div>
      </div>
      <EventContactCard /> 
     

    </section>
  );
};

export default EventDetails;


