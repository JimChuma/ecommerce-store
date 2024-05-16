import ProductPrice from "./product-price";
import ProductTitleAndRating from "./product-title-and-rating";
import ProductFeatures from "./product-features";

export default function ProductDescription({
  code,
  setImage,
  pickItem,
  setPickItem,
}) {
  return (
    <div className="product-grid-2">
      <ProductPrice code={code} />
      <ProductTitleAndRating code={code} />
      <ProductFeatures
        code={code}
        setImage={setImage}
        pickItem={pickItem}
        setPickItem={setPickItem}
      />
    </div>
  );
}
