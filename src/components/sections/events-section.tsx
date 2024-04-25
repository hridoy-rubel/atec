import Image from "next/image";
import LinkButton from "../ui/link-button";
import Link from "next/link";

export function EventsSection() {
  return (
    <section
      id="features-section"
      aria-label="features section"
      className="w-full"
    >
      
      <main className="container mt-5 mb-5">
        <div className="edu-elements-area edu-section-gap">
          <h4 className="text-blue-600 font-bold sm:text-lg md:text-xl lg:text-4xl mb-4 text-center">
            Upcoming Events
          </h4>
          <h3 className="animate-fade-up font-urbanist font-extrabold tracking-tight sm:text-3xl md:text-4xl lg:text-4xl mb-6 text-center">
            Your Presence Matters Most: Join The Event!
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div></div>

          <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="w-full">
              <p className="mt-4 mb-2  bg-blue-400 w-2/5 rounded pb-2">
                24-04-2027 03:18
              </p>
              <Image
                className="w-full rounded-lg"
                src="/images/card.jpg"
                alt="logo png"
                width={350}
                height={350}
              />
            </div>

            <div className="p-5">
              <h4 className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center md:text-left lg:text-left">
                Bangladesh
              </h4>
              <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center md:text-left lg:text-left">
                Test Event-1
              </p>

              <LinkButton title="Get Ticket" />
            </div>
          </div>

          <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="w-full">
              <p className="mt-4 mb-2  bg-blue-400 w-2/5 rounded pb-2">
                24-04-2027 03:18
              </p>
              <Image
                className="w-full rounded-lg"
                src="/images/card2.jpg"
                alt="logo png"
                width={350}
                height={350}
              />
            </div>
            <div className="p-5">
              <h4 className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center md:text-left lg:text-left">
                Bangladesh
              </h4>
              <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center md:text-left lg:text-left">
                Test Event-2
              </p>
              <LinkButton title="Get Ticket" />
            </div>
          </div>

          <div></div>
        </div>

        <div className="mt-12">
          <LinkButton title="See more" />
        </div>
      </main>
    </section>
  );
}
