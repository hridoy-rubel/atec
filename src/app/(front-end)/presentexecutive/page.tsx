import ExecutiveCard from "@/components/dropdown/pecommitee-card";
import Heading from "@/components/shared/heading";
import { pecomittee } from "@/data/pecommitee";
import { ExecutiveType } from "@/types";
import Link from "next/link";
import React from "react";

const ExecutivePage = () => {
  return (
    <section aria-label="present executive commitee page" className="">
      <div
        className="h-20 md:h-36 lg:h-48 bg-cover flex items-center justify-center mb-20"
        style={{
          backgroundImage: 'url("/images/pexels-kaique-rocha-125510.jpg")',
        }}
      >
        <Heading content="Present Executive commitee member" />
      </div>

      <main className="container ">
        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 mt-4 gap-8">
          {pecomittee.map((item: ExecutiveType, index: number) => (
            <div key={index}>
              <Link href={`/allexecutive/${item?.id}`}>
                <ExecutiveCard
                  name={item.name}
                  position={item.position}
                  image={item.image}
                  ccr={item.ccr}
                  session={item.session}
                />
              </Link>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default ExecutivePage;
