import Header from "../ui/header";
import Footer from "../ui/footer/footer";
import {
  cartItems,
  deleteCartItem,
  toggleSelect,
  select,
  selectAll,
  clickSelectAll,
  deleteSelectAll,
  increaseQuantity,
  decreaseQuantity,
} from "../lib/action";
import NoItem from "../ui/cart/no-item";
import CartFilled from "../ui/cart/cart-filled";

export default async function Cart() {
  return (
    <div>
      <Header />
      {cartItems.length === 0 ? (
        <NoItem />
      ) : (
        <CartFilled
          cartItems={cartItems}
          deleteItem={deleteCartItem}
          toggle={toggleSelect}
          select={select}
          selectAll={selectAll}
          clickSelectAll={clickSelectAll}
          deleteSelectAll={deleteSelectAll}
          increase={increaseQuantity}
          decrease={decreaseQuantity}
        />
      )}
      <Footer />
    </div>
  );
}
