import { useState } from "react";
import SizeOption from "./size-option";
import { productData } from "@/app/lib/data";

export default function SizeFeatures({ code }) {
  const [sizeSelect, setSizeSelect] = useState(0);
  const {
    features: { size },
  } = productData.find((item) => item.productCode == code);
  return (
    <div>
      <p className="feature-option">
        Size: <span id="get-size">{size[sizeSelect].option}</span>
      </p>
      <div className="size-container">
        {size.map((item, index) => {
          return (
            <SizeOption
              key={"size-option-" + index}
              option={item.option}
              size={sizeSelect}
              setSize={setSizeSelect}
              identity={index}
            />
          );
        })}
      </div>
    </div>
  );
}
