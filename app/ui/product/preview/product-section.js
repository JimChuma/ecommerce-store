"use client";
import { useState } from "react";
import ImageDisplay from "./image-display";
import ProductDescription from "./product-description";
import BuySection from "./buy-section";

export default function ProductSection({
  code,
  addCart,
  isAdded,
  removeCaption,
}) {
  const [newImage, setNewImage] = useState("");
  const [pickItem, setPickItem] = useState(0);
  return (
    <>
      <div className="product-welcome">
        Shop more and save more with our Welcome offer
      </div>
      <div className="flex just-ce product-container-body">
        <div className="product-container">
          <ImageDisplay
            code={code}
            newImage={newImage}
            setImage={setNewImage}
          />
          <ProductDescription
            code={code}
            setImage={setNewImage}
            pickItem={pickItem}
            setPickItem={setPickItem}
          />
          <BuySection
            code={code}
            pickItem={pickItem}
            addCart={addCart}
            isAdded={isAdded}
            removeCaption={removeCaption}
          />
        </div>
      </div>
    </>
  );
}
