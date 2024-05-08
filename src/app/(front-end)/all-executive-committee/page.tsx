import React from "react";

const AllExecutive = () => {
  return (
    <section className="container grid  ">
      <div className="w-24  h-28 bg-blue-500 rounded-full p-10 items-center place-content-center">
        <span>6 AM</span>
      </div>
      <div className="w-24  h-28 bg-blue-500 rounded-full p-10 items-center place-content-center">
        <span>6 AM</span>
      </div>
      <div className="grid grid-cols-3 bg-gray-400  h-48 gap-3 ">
        <div className=" bg-blue-700 rounded-3xl text-center ">1</div>
        <div className=" bg-blue-700 ">2</div>
        <div className=" bg-blue-700 ">3</div>
        <div className=" bg-blue-700 ">4</div>
        <div className="bg-blue-700">5</div>
        <div className="bg-blue-700">6</div>
      </div>
    </section>
  );
};

export default AllExecutive;
