import CartHeader from "./cart-header";
import CartList from "./cart-list";

export default function ShoppingCartView({
  cartItems,
  deleteItem,
  toggle,
  select,
  selectAll,
  clickSelectAll,
  deleteSelectAll,
  increase,
  decrease,
}) {
  return (
    <div className="cart-section-view">
      <CartHeader
        cartItems={cartItems}
        select={select}
        selectAll={selectAll}
        clickSelectAll={clickSelectAll}
        deleteSelectAll={deleteSelectAll}
      />
      <CartList
        cartItems={cartItems}
        deleteItem={deleteItem}
        toggle={toggle}
        increase={increase}
        decrease={decrease}
      />
    </div>
  );
}
