import Image from "next/image";
import { productData } from "@/app/lib/data";

export default function MainImage({ code, newImage }) {
  const product = productData.find((item) => item.productCode == code);
  const { imageSrc } = product;
  return (
    <Image
      src={newImage ? newImage : imageSrc}
      layout="responsive"
      width={300}
      height={300}
      alt={code}
      className="image"
    />
  );
}
