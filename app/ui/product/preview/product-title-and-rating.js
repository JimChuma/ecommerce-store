import StarRating from "../star-rating";
import { productData } from "@/app/lib/data";

export default function ProductTitleAndRating({ code }) {
  const {
    title,
    rating,
    ordersSold: sold,
  } = productData.find((item) => item.productCode == code);
  return (
    <>
      <p className="title-product">{title}</p>
      <p className="rating-sold-details-product">
        <span className="shift-up">{rating}</span>
        <span className="rating">
          <StarRating rating={rating} />
        </span>
        <span className="sold shift-up">{sold}+ sold</span>
      </p>
    </>
  );
}
