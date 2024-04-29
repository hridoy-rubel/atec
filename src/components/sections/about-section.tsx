import Balancer from "react-wrap-balancer";
import Image from "next/image";
import SubHeading from "../shared/sub-heading";
import Heading from "../shared/heading";

export function AboutSection(): JSX.Element {
  return (
    <section
      id="about-section"
      aria-label="about us section"
      className="w-full bg-background py-16"
    >
      <div className="w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-12 border-0 vertical-align max-w-100 h-auto">
        <div className="lg:col-span-1 relative left-24 mr-6  rounded-full">
          <div className="grid grid-cols-1 gap-12">
            <Image
              src="/images/about.jpg"
              alt="about us"
              height={350}
              width={450}
            />

            <div className="absolute left-36 top-48">
              <Image
                src="/images/us.jpg"
                alt="about us"
                height={300}
                width={350}
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="">
            <SubHeading content="ABOUT US" />
            <Heading content="Creating A Community Of Life Long Learners" />
            <p className="border-l-2 border-blue-700 ml-2 pl-2">
              The life of cadets is not just a 6 years journey that they spend
              within the boundary of Cadet College. Cadetship becomes a
              life-long journey.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between mt-8 ml-4">
            {/*  */}
            <div className="mb-8 md:mb-0">
              <h1 className="text-center md:text-left font-bold black-700">
                Adda
              </h1>
             
              <p>
                It is a long established fact that a reader will be distracted
                by this on readable content of when looking at its layout.
              </p>
            </div>
            <div className="mb-8 md:mb-0">
              <h1 className="text-center md:text-left font-bold black-500">
                Fun
              </h1>
              <p>
                It is a long established fact that a reader will be distracted
                by this on readable content of when looking at its layout.
              </p>
            </div>
            <div>
              <h1 className="text-center md:text-left font-bold black-500">
                Work
              </h1>
              <p>
                It is a long established fact that a reader will be distracted
                by this on readable content of when looking at its layout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
