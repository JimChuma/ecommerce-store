import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";

export default function NoItem() {
  return (
    <div className="no-items-view">
      <div className="no-items-container">
        <div className="no-items-cart-div">
          <ShoppingCartIcon className="no-items-cart" />
        </div>
        <p>No items yet? Continue shopping to explore more.</p>
        <Link href="/" className="explore-items">
          <span>Explore Items</span>
        </Link>
      </div>
    </div>
  );
}
