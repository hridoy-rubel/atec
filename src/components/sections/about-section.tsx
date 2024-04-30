import Image from "next/image";
import Heading from "../shared/heading";
import SubHeading from "../shared/sub-heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";

export function AboutSection(): JSX.Element {
  return (
    <section
      id="about-section"
      aria-label="about us section"
      className="w-full"
    >
      <div className="container mt-5 flex flex-col lg:flex-row justify-center">
        <div className="relative md:mb-16 lg:w-2/5 md:px-8 lg:px-16">
          <div>
            <Image
              src="/images/about.jpg"
              alt="about us"
              height={350}
              width={450}
              className="rounded"
            />
          </div>

          <div className="hidden right-3 top-1/2 md:absolute md:block">
            <Image
              src="/images/us.jpg"
              alt="about us"
              height={300}
              width={350}
              className="rounded"
            />
          </div>
        </div>

        <div className="mt-5 lg:w-3/5 md:px-8 lg:px-16 lg:mt-0">
          <div className="lg:text-left">
            <div className="text-center lg:text-left">
              <SubHeading content="ABOUT US" />
              <Heading content="A Cheerful Community" />
            </div>
            <p className="border-l-2 border-blue-700 ml-2 pl-2">
              The life of cadets is not just a 6 years journey that they spend
              within the boundary of Cadet College. Cadetship becomes a
              life-long journey.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between mt-8 gap-2">
            <div className="w-14 h-14 bg-orange-500 rounded-full ring-4 ring-orange-800 p-3 hidden lg:block">
              <FontAwesomeIcon
                icon={faBookOpenReader}
                className="fa-2x text-white"
              />
            </div>
            <div className="mb-8 p-4 rounded-lg shadow-lg md:mb-0 dark:bg-gradient-to-br">
              <h1 className="text-center md:text-left font-bold black-700">
                Adda
              </h1>
              <p>
                It is a long established fact that a reader will be distracted
                by this on readable content of when looking at its layout.
              </p>
            </div>

            <div className="mb-8 p-4 rounded-lg shadow-lg  md:mb-0 dark:bg-gradient-to-br">
              <h1 className="text-center md:text-left font-bold black-500">
                Fun
              </h1>
              <p>
                It is a long established fact that a reader will be distracted
                by this on readable content of when looking at its layout.
              </p>
            </div>

            <div className="p-4 rounded-lg shadow-lg dark:bg-gradient-to-br">
              <h1 className="text-center md:text-left font-bold black-500 ">
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
