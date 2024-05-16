import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const cartItems = [];

export let select = [];

export let selectAll = false;

export let isAdded = false;

export async function increaseQuantity(index) {
  "use server";
  const quantity = cartItems[index].quantity;
  if (quantity < 10) {
    cartItems[index].quantity = Number(quantity) + 1;
    updateSelect();
    revalidatePath("/cart");
  }
}

export async function decreaseQuantity(index) {
  "use server";
  const quantity = cartItems[index].quantity;
  if (quantity > 1) {
    cartItems[index].quantity = Number(quantity) - 1;
    updateSelect();
    revalidatePath("/cart");
  }
}

export async function toggleSelect(index) {
  "use server";
  const value = cartItems[index].isSelect;
  cartItems[index].isSelect = !value;
  updateSelect();
  revalidatePath("/cart");
}

async function updateSelect() {
  const newSelect = cartItems.filter((item) => item.isSelect === true);
  select = newSelect;
  checkSelectAll();
}

async function checkSelectAll() {
  if (cartItems.length === select.length) {
    selectAll = true;
  } else {
    selectAll = false;
  }
}

export async function clickSelectAll(selectAll) {
  "use server";
  if (selectAll) {
    cartItems.forEach((item) => (item.isSelect = false));
    updateSelect();
  } else {
    cartItems.forEach((item) => (item.isSelect = true));
    updateSelect();
  }
  revalidatePath("/cart");
}

export async function deleteSelectAll(bool) {
  "use server";
  if (bool) {
    const newItems = cartItems.filter((item) => item.isSelect === false);
    cartItems.length = 0;
    newItems.forEach((item) => cartItems.push(item));
    updateSelect();
  }
  revalidatePath("/cart");
}

async function alreadyAdded(code) {
  isAdded = true;
  revalidatePath("/product?query=" + code);
}

export async function deleteCartItem(code, color, size) {
  "use server";
  const productIndex = cartItems.findIndex(
    (item) => item.code == code && item.color == color && item.size == size
  );
  cartItems.splice(productIndex, 1);
  updateSelect();
  revalidatePath("/cart");
}

export async function removeCaption(code) {
  "use server";
  isAdded = false;
  revalidatePath("/product?query=" + code);
}

export async function addToCart(product, buy) {
  "use server";
  const { code } = product;
  if (cartItems.length === 0) {
    cartItems.push(product);
    updateSelect();
  } else {
    const findProductCode = cartItems.filter((item) => item.code == code);
    const { color: newColor, size: newSize } = product;
    if (findProductCode) {
      const findColor = findProductCode.filter(
        (item) => item.color == newColor
      );

      const foundColorSize = findColor.find((item) => item.size == newSize);
      if (foundColorSize) {
        if (!buy) {
          alreadyAdded(code);
        }
      } else {
        cartItems.push(product);
        updateSelect();
      }
    }
  }
  if (buy) {
    revalidatePath("/cart");
    redirect("/cart");
  } else {
    revalidatePath("/product?query=" + code);
  }
}
