"use client";
import ShoppingCartView from "./shopping-cart-view";
import CheckoutSummary from "./checkout-summary";

export default function CartFilled({
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
    <div className="cart-filled-view">
      <div className="cart-filled-container">
        <ShoppingCartView
          cartItems={cartItems}
          deleteItem={deleteItem}
          toggle={toggle}
          select={select}
          selectAll={selectAll}
          clickSelectAll={clickSelectAll}
          deleteSelectAll={deleteSelectAll}
          increase={increase}
          decrease={decrease}
        />
        <CheckoutSummary cartItems={cartItems} select={select} />
      </div>
    </div>
  );
}
