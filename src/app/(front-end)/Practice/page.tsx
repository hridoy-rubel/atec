import React from "react";
import { BsArrowDown } from "react-icons/bs";

const Practice = () => {
  return (
    <div>
      <p className="bg-gradient-to-br from-red-500 to-purple-500 text-transparent bg-clip-text text-center text-5xl">
        I am a student
      </p>
      <button className="transition duration-1000 ease-in-out delay-500 bg-blue-600 mt-8 ms-8 mb-6 px-5 py-3 rounded-lg hover:bg-red-600 hover:-translate-y-4 hover:scale-125 ">
        Hover me
      </button>
      <BsArrowDown className="ms-28 w-10 h-10 animate-bounce text-red-700" />
    </div>
  );
};

export default Practice;
