import React from "react";
import Heading from "@/components/shared/heading";
import { pecomittee } from "@/data/pecommitee";
import ExecutiveCard from "@/components/dropdown/pecommitee-card";

interface Executivetype {
  name: string;
  position: string;
  image: string;
  ccr: string;
  session: string;
}

const AllExecutive: React.FC = () => {
  return (
    <section aria-label="All executive committee" className="dark:text-black">
      <div
        className="h-20 md:h-36 lg:h-48 bg-cover flex items-center justify-center dark:text-black mb-20"
        style={{
          backgroundImage: 'url("/images/pexels-pixabay-67857.jpg")',
        }}
      >
        <Heading content="Batch Represintative" />
      </div>

      <main className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-4 gap-8">
          {pecomittee.map((item: Executivetype, index: number) => (
            <ExecutiveCard
              key={index}
              name={item.name}
              position={item.position}
              image={item.image}
              ccr={item.ccr}
              session={item.session}
            />
          ))}
        </div>
      </main>
    </section>
  );
};

export default AllExecutive;
