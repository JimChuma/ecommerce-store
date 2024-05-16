import CartListItem from "./cart-list-item";

export default function CartList({
  cartItems,
  deleteItem,
  toggle,
  increase,
  decrease,
}) {
  return (
    <div className="item-list-section">
      {cartItems.map((item, index) => {
        return (
          <CartListItem
            key={"cart" + item.code + index}
            code={item.code}
            color={item.color}
            size={item.size}
            quantity={item.quantity}
            amount={item.amount}
            select={item.isSelect}
            identify={index}
            deleteItem={deleteItem}
            toggle={toggle}
            increase={increase}
            decrease={decrease}
          />
        );
      })}
    </div>
  );
}
