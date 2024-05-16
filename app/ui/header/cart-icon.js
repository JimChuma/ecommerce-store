import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CartCounter from "./cart-counter";
import Link from "next/link";

export default function CartIcon() {
  return (
    <Link href="/cart" className="link">
      <div className="flex header-margin-icon">
        <ShoppingCartOutlinedIcon className="header-cart-icon" />
        <div>
          <CartCounter />
          <span className="header-cart-text">Cart</span>
        </div>
      </div>
    </Link>
  );
}
