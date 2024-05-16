import { cartItems } from "@/app/lib/action";

export default function CartCounter() {
  return (
    <div>
      <span id="add-to-cart" className="cart-counter">
        {cartItems.length}
      </span>
    </div>
  );
}
