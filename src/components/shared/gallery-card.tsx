import Image from "next/image";

type GalleryCardPropTypes = {
  title: string;
  image: string;
};

const GalleryCard = ({ image, title }: GalleryCardPropTypes) => {
  return (
    <div className="mx-auto flex items-center justify-center w-[310px] h-[490px]">
      <div className="flex flex-col w-full rounded-md shadow-lg">
        {/* image section */}
        <div className="w-full bg-top bg-cover rounded-t">
          <Image
            alt="event image"
            src={image}
            width={310}
            height={215}
            className="rounded-t-md"
          />
          {title}
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
