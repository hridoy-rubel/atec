import Image from "next/image";
import sjLogo from "../../../public/images/atec-logo.png";
import Link from "next/link";

const SideBarLogo = () => {
  return (
    <Link href={"/"}>
      <Image
        width={0}
        alt=""
        className="w-12 min-h-fit"
        height={0}
        src={sjLogo}
        style={{ width: "55px", height: "auto" }}
      />
    </Link>
  );
};

export default SideBarLogo;
