import Heading from "@/components/shared/heading";
import SubHeading from "@/components/shared/sub-heading";
import React from "react";

const Batch = () => {
  return (
    <main>
      <div className="">
        <SubHeading content="" />
        <div
          className="h-20 md:h-36 lg:h-48 bg-cover flex items-center justify-center "
          style={{
            backgroundImage: 'url("/images/pexels-kaique-rocha-125510.jpg")',
          }}
        >
          <Heading content="Batch Representative" />
        </div>
      </div>
    </main>
  );
};

export default Batch;
