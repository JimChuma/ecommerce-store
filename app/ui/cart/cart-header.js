import SelectAllItems from "./select-all-items";

export default function CartHeader({
  cartItems,
  select,
  selectAll,
  clickSelectAll,
  deleteSelectAll,
}) {
  return (
    <div className="cart-header-div">
      <h2>Shopping Cart ({cartItems.length})</h2>
      <SelectAllItems
        select={select}
        selectAll={selectAll}
        clickSelectAll={clickSelectAll}
        deleteSelectAll={deleteSelectAll}
      />
    </div>
  );
}
