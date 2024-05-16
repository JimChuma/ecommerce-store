import { productData } from "@/app/lib/data";

export default function ProductPrice({ code }) {
  const {
    discountPrice: dPrice,
    normalPrice: nPrice,
    discountRate: discount,
  } = productData.find((item) => item.productCode == code);
  const discountPercent = (discount * 100).toFixed(0);
  const priceFormat = dPrice.split(".");
  const [interger, decimal] = priceFormat;
  return (
    <p className="price-details-product">
      <span>
        <span className="dollar-product">US $</span>
        <span className="interger-product">{interger}</span>
        <span className="decimal-product">.{decimal}</span>
      </span>
      <span className="normal-price-product">US ${nPrice}</span>
      <span>-{discountPercent}%</span>
    </p>
  );
}
