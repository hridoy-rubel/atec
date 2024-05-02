import GalleryCard from "@/components/shared/gallery-card";
import Heading from "@/components/shared/heading";
import { gallery } from "@/data/gallery";
import { GalleryType } from "@/types";

const GalleryPage = () => {
  return (
    <section aria-label="Gallery page" className="w-full mb-10">
      <div
        className="h-20 md:h-36 lg:h-48 bg-cover flex items-center justify-center mb-20"
        style={{
          backgroundImage: 'url("/images/gallery.png")',
        }}
      >
        <Heading content="ATEC Gallery" />
      </div>

      <main className="container mt-5 grid gap-12 md:gap-5 lg:gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {gallery?.map((gk: GalleryType, index: number) => (
            <div key={index}>
              <GalleryCard image={gk.image} title={gk.title} />
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default GalleryPage;
