import ListItem from "./list-item";
import { productData } from "@/app/lib/data";

export default function ShopItems() {
  return (
    <div className="flex just-ce">
      <div className="wd-90 shop-body">
        <p className="slogan">Bringing Out The New You...</p>
        <h1 className="headline">Shop From Our Best Sellers</h1>
        <div className="product-grid">
          {productData.map((item) => {
            return (
              <ListItem
                key={item.productCode}
                title={item.title}
                code={item.productCode}
                imageSrc={item.imageSrc}
                dPrice={item.discountPrice}
                nPrice={item.normalPrice}
                discount={item.discountRate}
                rating={item.rating}
                sold={item.ordersSold}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
