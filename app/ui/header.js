import Logo from "./header/logo";
import CartIcon from "./header/cart-icon";

export default function Header() {
  return (
    <div className="flex just-ce header">
      <div className="flex just-sb wd-90">
        <Logo />
        <CartIcon />
      </div>
    </div>
  );
}
