import React from "react";
import SubHeading from "@/components/shared/sub-heading";
import { GalleryType } from "@/types";
import { gallery } from "@/data/gallery";
import GalleryCard from "@/components/shared/gallery-card";
import Heading from "@/components/shared/heading";

const GalleryPage = () => {
  return (
    <div>
      <div
        className=" bg-cover w-screen h-64 relative container text-center"
        style={{
          backgroundImage: 'url("/images/gallery.png")',
        }}
      >
        <Heading content="ATEC Gallery" />
      </div>

      {/* Gallery part */}

      <div className=" flex flex-wrap justify-center gap-10 m-10 ">
        {gallery?.map((gk: GalleryType, index: number) => (
          <div key={index}>
            <GalleryCard image={gk.image} title={gk.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
