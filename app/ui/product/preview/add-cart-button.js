import { productData } from "@/app/lib/data";

export default function AddCartButton({
  code,
  addCart,
  isAdded,
  removeCaption,
}) {
  function updateCart(code) {
    const { discountPrice: amount } = productData.find(
      (item) => item.productCode == code
    );
    const color = document.getElementById("get-color");
    const size = document.getElementById("get-size");
    const quantity = document.getElementById("get-quantity");
    const product = {
      code: code,
      color: color ? color.textContent : "empty",
      size: size ? size.textContent : "empty",
      quantity: quantity.textContent,
      amount: amount,
      isSelect: true,
    };
    addCart(product, false);
  }
  if (isAdded) {
    const id = document.getElementById("tooltip-text");
    if (id) {
      id.style.visibility = "visible";
      setTimeout(() => {
        id.style.visibility = "hidden";
        removeCaption(code);
      }, 3000);
    }
  }
  return (
    <>
      <p
        onClick={() => updateCart(code)}
        className="padding-10 add-cart-button"
      >
        Add to Cart
      </p>
      <p className="hidden-add-sign">
        <span className="tooltiptext" id={"tooltip-text"}>
          Item already added to cart
        </span>
      </p>
    </>
  );
}
