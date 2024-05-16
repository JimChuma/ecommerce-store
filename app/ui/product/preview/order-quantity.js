import { useState } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

export default function OrderQuantity() {
  const [quantity, setQuantity] = useState(1);

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  function decreaseQuantity() {
    setQuantity(quantity - 1);
  }

  return (
    <div className="padding-10">
      <p className="font-w-500">Quantity</p>
      <p className="quantity-calc">
        <button
          className="quantity-button"
          onClick={quantity == 1 ? null : decreaseQuantity}
          style={
            quantity == 1
              ? { cursor: "not-allowed", color: "#A1A1A1" }
              : { cursor: "pointer" }
          }
        >
          <RemoveRoundedIcon className="button-size" />
        </button>
        <span className="quantity-number" id="get-quantity">
          {quantity}
        </span>
        <button
          className="quantity-button"
          onClick={quantity == 10 ? null : increaseQuantity}
          style={
            quantity == 10
              ? { cursor: "not-allowed", color: "#A1A1A1" }
              : { cursor: "pointer" }
          }
        >
          <AddRoundedIcon className="button-size" />
        </button>
      </p>
      <p>Max. 10 pcs/shopper</p>
    </div>
  );
}
