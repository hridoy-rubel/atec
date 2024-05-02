import React from "react";
import SubHeading from "@/components/shared/sub-heading";
import { GalleryType } from "@/types";
import { gallery } from "@/data/gallery";
import GalleryCard from "@/components/shared/gallery-card";

const GalleryPage = () => {
  return (
    <div>
      <div
        className=" bg-center w-screen h-64 relative container"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <h1 className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2  text-center font-bold">
          <SubHeading content="ATEC GALLERY" />
        </h1>
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
