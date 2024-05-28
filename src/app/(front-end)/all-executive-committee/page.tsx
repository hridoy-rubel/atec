import React from "react";

const AllExecutive = () => {
  return (
    <section className="container gap-5 ">
      <div className="grid grid-cols-2 h-screen gap-3 rounded-3xl">
        <div className="bg-gradient-to-r from-teal-900 text-center translate-x-2 hover:scale-105 duration-500 bg-fuchsia-600">
          1
        </div>
        <div className="bg-blue-700 hover:scale-105 duration-500">2</div>
        {/* <div
          className="bg-fuchsia-700 transform:constructor(props) {
          super(props)
        
          this.state = {
             first
          }
        }"
        >
          Hover me
        </div> */}
        <div className="bg-red-700 hover:scale-110 duration-700 ease-in-out">
          3
        </div>
        <div className="bg-gradient-to-r from-pink-700 to-purple-500 bg-clip-text font-extrabold text-3xl text-transparent">
          <p>Bangladesh is a small country.</p>
        </div>
      </div>
    </section>
  );
};

export default AllExecutive;
