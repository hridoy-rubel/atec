import EventTimer from "@/components/shared/event-timer";
import SubHeading from "@/components/shared/sub-heading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const data = [1, 2, 3, 4, 5];

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

      <div className="mt-6 container gap-5">
        <div className="flex justify-between">
          <div className="w-2/3 mx-2 px-3">
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              {data.map((data: any) => (
                <div
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                  key={data}
                >
                  {/* Icon  */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="10"
                    >
                      <path
                        fill-rule="nonzero"
                        d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                      />
                    </svg>
                  </div>

                  {/* card */}
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border shadow">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold">Order Placed</div>
                      <time className="font-caveat font-medium text-indigo-500">
                        08/06/2023
                      </time>
                    </div>
                    <div className="">
                      Pretium lectus quam id leo. Urna et pharetra aliquam
                      vestibulum morbi blandit cursus risus.
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className=" w-1/3 px-3 mx-2">
            <EventTimer />
            <div className="flex justify-center mt-1 ">
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
      </div>
    </section>
  );
};

export default EventDetails;
