import { getStrapiMedia } from "@/utils/media";
import NextImage from "next/image";

const Image = ({ image }: any) => {
  if(!image || !image.data){
    return null
  }
  const { alternativeText, width, height } = image.data.attributes;

  return (
    <NextImage
      layout="responsive"
      width={width}
      height={height}
      objectFit="contain"
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
    />
  );
};

export default Image;