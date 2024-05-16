"use client";
import { productData } from "@/app/lib/data";

export default function BuyNowButton({ code, addCart }) {
  function submitForm(code) {
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
    addCart(product, true);
  }

  return (
    // <form action={() => submitForm(code)} id="buy-now-form">
    //   <p onClick={() => document.getElementById("buy-now-form").requestSubmit()} className="padding-10 buy-now-button">
    //   Buy now
    // </p>
    // </form>

    <p onClick={() => submitForm(code)} className="padding-10 buy-now-button">
      Buy now
    </p>
  );
}
