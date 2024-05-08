import SubHeading from "@/components/shared/sub-heading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const EventContactCard = () => {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg sm:bg-white text-black overflow-hidden m-8 mr-8 px-6">
      <div className="flex justify-center mt-4">
        <SubHeading content="Contact Person" />
      </div>
      <div className="container flex max-w-lg mx-auto bg-gray-400 shadow-md rounded-lg sm:bg-slate-300 text-black overflow-hidden m-8">
        <div className="mt-8">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="m-4">
          <h1>Name: Md Hazrat Ali</h1>
          <h1>Designation: execative director</h1>
          <h1>Phone Number: 018******66</h1>
        </div>
      </div>

      <div className="container flex max-w-lg mx-auto bg-gray-400 shadow-md rounded-lg sm:bg-slate-300 text-black overflow-hidden m-8">
        <div className="mt-8">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="m-4">
          <h1>Name:</h1>
          <h1>Designation:</h1>
          <h1>Phone Number:</h1>
        </div>
      </div>

      <div className="container flex max-w-lg mx-auto bg-gray-400 shadow-md rounded-lg sm:bg-slate-300 text-black overflow-hidden m-8">
        <div className="mt-8">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
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
  );
};

export default EventContactCard;
