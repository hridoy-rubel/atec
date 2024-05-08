import Image from "next/image";
import React from "react";

type ExecutiveCardPropsTypes = {
  name: string;
  position: string;
  ccr: string;
  session: string;
  image: string;
};

const ExecutiveCard = ({
  name,
  position,
  ccr,
  session,
}: ExecutiveCardPropsTypes) => {
  return (
    <main className="container">
      <div className="py-2  bg-[#ef2db5e6] rounded-md shadow-lg ">
        <div className="flex justify-center w-full bg-top bg-cover rounded-t my-2">
          <Image
            className="rounded-full w-24 h-24 border-4 "
            src="/images/avatars/Rubell.jpg"
            alt="Profile"
            height={200}
            width={200}
          />
        </div>
        <div className="text-center mt-3">
          <h3 className="text-lg font-semibold ">{name}</h3>
          <p>
            <span className="text-lg">{position}</span>
          </p>
          <p>{ccr}</p>
          <p>{session}</p>
        </div>
      </div>
    </main>
  );
};

export default ExecutiveCard;
