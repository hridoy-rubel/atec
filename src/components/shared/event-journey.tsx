import { ArrowRightIcon } from "@radix-ui/react-icons";

const EventJourney = () => {
  return (
    <main>
      {/*   Container*/}
      <div className="container">
        <div className="relative before:absolute before:inset-3 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-slate-600 before:to-transparent ">
          <div className="relative flex items-center justify-between lg:justify-normal  lg:odd:flex-row-reverse md:justify-normal md:odd:flex-row-reverse group is-active ">
            <div className="flex items-center justify-center w-16 h-16 rounded-full border border-white bg-yellow-400 group-[.is-active]:bg-emerald-900 text-slate-700 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <p> 09:00AM </p>
            </div>
            <p>
              <ArrowRightIcon />
            </p>
            {/* Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow bg-gradient-to-r from-green-400 to-blue-300 ">
              <div className="flex items-center justify-center space-x-2 mb-1">
                <div className="font-bold text-slate-900">Event Start</div>
              </div>
              <div className="text-slate-500">
                Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
                morbi blandit cursus risus.
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-3 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-slate-600 before:to-transparent">
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-16 h-16 rounded-full border border-white bg-yellow-400 group-[.is-active]:bg-emerald-900 text-slate-700 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2">
              <p> 09:00AM </p>
            </div>
            <p>
              <ArrowRightIcon />
            </p>
            {/* Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow mt-6">
              <div className="flex items-center justify-center space-x-2 mb-1">
                <div className="font-bold text-slate-900">Event Start</div>
              </div>
              <div className="text-slate-500">
                Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
                morbi blandit cursus risus.
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-3 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-slate-600 before:to-transparent">
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-16 h-16 rounded-full border border-white bg-yellow-400 group-[.is-active]:bg-emerald-900 text-slate-700 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <p> 09:00AM </p>
            </div>
            <div>
              <ArrowRightIcon />
            </div>

            {/* Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow mt-6">
              <div className="flex items-center justify-center space-x-2 mb-1">
                <div className="font-bold text-slate-900">Event Start</div>
              </div>
              <div className="text-slate-500">
                Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
                morbi blandit cursus risus.
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default EventJourney;
