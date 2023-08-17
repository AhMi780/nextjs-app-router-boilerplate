import Image from "next/legacy/image";
import Link from "next/link";

const Logo = ({ href, containerClass, imageClassName }) => {
  return (
    <Link
      href={href ? href : "/"}
      className={` 2xl:max-w-[236px] flex ${containerClass}`}
    >
      <Image
        className={`w-full h-full ${imageClassName}`}
        src="/Assets/Images/MatchMed Logo 1 1.svg"
        width={160} // Update with the actual width of the image
        height={60} // Update with the actual height of the image
        alt="Logo"
      />
    </Link>
  );
};
export default Logo;
