import Image from "next/image";
import Link from "next/link";
import StarRating from "./star-rating";
import AddCart from "./add-cart";

export default function ListItem(props) {
  const { title, code, imageSrc, dPrice, nPrice, discount, rating, sold } =
    props;
  const heading = title.slice(0, 24) + "...";
  const discountPercent = (discount * 100).toFixed(0);
  const priceFormat = dPrice.split(".");
  const [interger, decimal] = priceFormat;

  return (
    <div className="product-frame">
      <Link href={"/product" + "?query=" + code} className="link-black">
        <AddCart code={code} />
        <div className="product-list">
          <div>
            <Image
              src={imageSrc}
              width={240}
              height={240}
              alt={heading}
              className="product-image"
            />
          </div>
          <div className="product-details">
            <p className="heading-details">{heading}</p>
            <p>
              <span className="rating">
                <StarRating rating={rating} />
              </span>
              <span className="sold shift-down">{sold}+ sold</span>
            </p>
            <p className="price-details">
              <span>
                <span className="dollar">US $</span>
                <span className="interger">{interger}</span>
                <span className="decimal">.{decimal}</span>
              </span>
              <span className="normal-price">US ${nPrice}</span>
            </p>
            <p>
              <span className="offer">Welcome offer</span>
              <span>-{discountPercent}%</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
