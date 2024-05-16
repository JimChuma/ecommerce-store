import Image from "next/image";
import Link from "next/link";
import { productData } from "@/app/lib/data";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function CartListItem({
  code,
  color,
  size,
  quantity,
  amount,
  select,
  identify,
  deleteItem,
  toggle,
  increase,
  decrease,
}) {
  const product = productData.find((item) => item.productCode == code);
  const {
    title,
    features: { color: dataColor },
  } = product;
  const productColor = dataColor.find((item) => item.option == color);
  const productImg = productColor.colorImg;
  return (
    <div className="item-list-container">
      <div className="item-list-container-select">
        {select ? (
          <CheckCircleIcon
            className="circle-checked"
            onClick={() => toggle(identify)}
          />
        ) : (
          <span
            className="circle-unchecked"
            onClick={() => toggle(identify)}
          ></span>
        )}
      </div>
      <div className="item-display-features">
        <div>
          <Link href={"/product?query=" + code}>
            <Image
              src={productImg}
              width={120}
              height={120}
              alt={"cart-img-" + identify}
              className="item-feature-image"
            />
          </Link>
        </div>
        <div className="item-description-div">
          <Link href={"/product?query=" + code} className="item-feature-title">
            <p>{title.slice(0, 70) + "..."}</p>
          </Link>
          <p className="item-margin">
            <span className="item-feature-feature">
              {color} / {size}
            </span>
          </p>
          <p className="item-feature-amount">US ${amount}</p>
          <DeleteOutlinedIcon
            className="item-delete-icon"
            onClick={() => deleteItem(code, color, size)}
          />
          <div className="item-quantity-calc">
            <span
              className="item-quantity-button"
              onClick={quantity == 1 ? null : () => decrease(identify)}
              style={
                quantity == 1
                  ? { cursor: "not-allowed", color: "#A1A1A1" }
                  : { cursor: "pointer" }
              }
            >
              <RemoveOutlinedIcon className="item-quantity-icon" />
            </span>
            <div className="item-quantity-number">
              <span>{quantity}</span>
            </div>
            <span
              className="item-quantity-button"
              onClick={quantity == 10 ? null : () => increase(identify)}
              style={
                quantity == 10
                  ? { cursor: "not-allowed", color: "#A1A1A1" }
                  : { cursor: "pointer" }
              }
            >
              <AddOutlinedIcon className="item-quantity-icon" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
