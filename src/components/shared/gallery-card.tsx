import Image from "next/image";

type GalleryCardPropTypes = {
  title: string;
  image: string;
};

const GalleryCard = ({ image, title }: GalleryCardPropTypes) => {
  return (
    <div className="w-full bg-top bg-cover rounded-md">
      <Image
        alt="gallery image"
        src={image}
        width={310}
        height={215}
        className="rounded-t-md"
        style={{ width: "100%", height: "auto" }}
      />
      <div className="text-center p-2 font-bold shadow-lg bg-[#e74de4a1] dark:bg-[#d676d480] rounded-b-md">
        {title}
      </div>
    </div>
  );
};

export default GalleryCard;
