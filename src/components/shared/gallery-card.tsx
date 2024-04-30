import Image from "next/image";

type GalleryCardPropTypes = {
  title: string;
  image: string;
};

const GalleryCard = ({ image, title }: GalleryCardPropTypes) => {
  return (
    /*  <div className="mx-auto flex items-center justify-center w-[310px] h-[490px]"> */
    <div className="flex flex-col w-full rounded-md shadow-lg">
      {/* image section */}
      <div className="w-full bg-top bg-cover rounded-sm">
        <Image
          alt="gallery image"
          src={image}
          width={500}
          height={400}
          className="rounded-t-md"
        />
        <div className="text-center p-2 text-blue-700 font-bold "> {title}</div>
      </div>
    </div>
  );
};

export default GalleryCard;
