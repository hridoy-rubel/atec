import { ArrowRightIcon } from "@radix-ui/react-icons";
import SubHeading from "./sub-heading";
const EventJourney = () => {
  return (
    <main className="flex items-start">
      <div className="container">
        <div className="w-1/2 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          <div className="relative">
            <div className="md:flex items-center md:space-x-4 mb-3">
              <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                  <svg
                    className="fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                  >
                    <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                  </svg>
                </div>

                <time className="font-caveat font-medium text-xl text-indigo-500 md:w-28">
                  9:00 AM
                </time>
              </div>

              <div className="text-slate-500 ml-14">
                <span className="text-slate-900 font-bold dark:bg-blue-700">
                  Journey Start
                </span>
              </div>
            </div>

            <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose injected humour and the like.
            </div>
          </div>
        </div>

        <div className="w-1/2 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          <div className="container relative"></div>
          <div className="md:flex items-center md:space-x-4 mb-3">
            <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                <svg
                  className="fill-emerald-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                </svg>
              </div>

              <time className="font-caveat font-medium text-xl text-indigo-500 md:w-28">
                11:00 AM
              </time>
            </div>

            <div className="text-slate-500 ml-14">
              <span className="text-slate-900 font-bold dark:bg-blue-700">
                Tea Break
              </span>
            </div>
          </div>

          <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose injected humour and the like.
          </div>
        </div>

        <div className="w-1/2 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          <div className="container relative"></div>
          <div className="md:flex items-center md:space-x-4 mb-3">
            <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                <svg
                  className="fill-emerald-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                </svg>
              </div>

              <time className="font-caveat font-medium text-xl text-indigo-500 md:w-28">
                01:00 PM
              </time>
            </div>

            <div className="text-slate-500 ml-14">
              <span className="text-slate-900 font-bold dark:bg-blue-700">
                Lunch Break
              </span>
            </div>
          </div>

          <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose injected humour and the like.
          </div>
        </div>

        <div className="w-1/2 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          <div className="container relative"></div>
          <div className="md:flex items-center md:space-x-4 mb-3">
            <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                <svg
                  className="fill-emerald-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                </svg>
              </div>

              <time className="font-caveat font-medium text-xl text-indigo-500 md:w-28">
                05:00 PM
              </time>
            </div>

            <div className="text-slate-500 ml-14">
              <span className="text-slate-900 font-bold dark:bg-blue-700">
                Price Giving Ceremony
              </span>
            </div>
          </div>

          <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose injected humour and the like.
          </div>
        </div>

        <div className="w-1/2 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          <div className="container relative"></div>
          <div className="md:flex items-center md:space-x-4 mb-3">
            <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                <svg
                  className="fill-emerald-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                </svg>
              </div>

              <time className="font-caveat font-medium text-xl text-indigo-500 md:w-28">
                07:00 PM
              </time>
            </div>

            <div className="text-slate-500 ml-14">
              <span className="text-slate-900 font-bold dark:bg-blue-700">
                Consert
              </span>
            </div>
          </div>

          <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose injected humour and the like.
          </div>
        </div>

        <div className="w-1/2 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          <div className="container relative"></div>
          <div className="md:flex items-center md:space-x-4 mb-3">
            <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                <svg
                  className="fill-emerald-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                >
                  <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                </svg>
              </div>

              <time className="font-caveat font-medium text-xl text-indigo-500 md:w-28">
                11:00 PM
              </time>
            </div>

            <div className="text-slate-500 ml-14">
              <span className="text-slate-900 font-bold dark:bg-blue-700">
                The End
              </span>
            </div>
          </div>

          <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose injected humour and the like.
          </div>
        </div>
      </div>
    </main>
  );
};

export default EventJourney;
