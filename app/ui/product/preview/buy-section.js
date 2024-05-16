import ShippingTime from "./shipping-time";
import OrderQuantity from "./order-quantity";
import BuyNowButton from "./buy-now-button";
import AddCartButton from "./add-cart-button";

export default function BuySection({ code, addCart, isAdded, removeCaption }) {
  return (
    <div className="product-grid-3">
      <div className="buy-section">
        <div>
          <p className="discount-expire">Discount expires in 2 days</p>
          <ShippingTime code={code} />
          <hr />
        </div>
        <div>
          <OrderQuantity />
        </div>
        <div>
          <BuyNowButton code={code} addCart={addCart} />
          <AddCartButton
            code={code}
            addCart={addCart}
            isAdded={isAdded}
            removeCaption={removeCaption}
          />
        </div>
      </div>
    </div>
  );
}
