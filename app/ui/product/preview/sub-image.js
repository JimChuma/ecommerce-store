import SubImageItem from "./sub-image-item";
import { productData } from "@/app/lib/data";

export default function SubImage({
  code,
  setImage,
  pickItem,
  setPickItem,
  isClick,
}) {
  const product = productData.find((item) => item.productCode == code);
  const {
    subImageSrc,
    features: { color },
  } = product;
  return (
    <>
      {isClick && (
        <p className="feature-option">
          Color: <span id="get-color">{color[pickItem].option}</span>
        </p>
      )}
      <div className="sub-image-div">
        {isClick
          ? color.map((item, index) => {
              return (
                <SubImageItem
                  key={code + "sub" + index}
                  imgAlt={"color-image" + index}
                  imgURL={item.colorImg}
                  setImage={setImage}
                  isClick={isClick}
                  identity={index}
                  pickItem={pickItem}
                  setPickItem={setPickItem}
                />
              );
            })
          : subImageSrc.map((item, index) => {
              return (
                <SubImageItem
                  key={code + "sub" + index}
                  imgAlt={"sub-image" + index}
                  imgURL={item}
                  setImage={setImage}
                  isClick={isClick}
                  identity={index}
                  pickItem={pickItem}
                  setPickItem={setPickItem}
                />
              );
            })}
      </div>
    </>
  );
}
