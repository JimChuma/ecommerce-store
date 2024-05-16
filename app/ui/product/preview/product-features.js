import ColorFeatures from "./color-features";
import SizeFeatures from "./size-features";
import { productData } from "@/app/lib/data";

export default function ProductFeatures({
  code,
  setImage,
  pickItem,
  setPickItem,
}) {
  const {
    features: { color, size },
  } = productData.find((item) => item.productCode == code);
  return (
    <>
      {color.length ? (
        <ColorFeatures
          code={code}
          setImage={setImage}
          pickItem={pickItem}
          setPickItem={setPickItem}
        />
      ) : null}
      {size.length ? <SizeFeatures code={code} /> : null}
    </>
  );
}
