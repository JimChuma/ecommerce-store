import Image from "next/image";

export default function SubImageItem({
  imgURL,
  imgAlt,
  setImage,
  isClick,
  identity,
  pickItem,
  setPickItem,
}) {
  function handleClickedColor(identity) {
    setImage(imgURL);
    setPickItem(identity);
  }
  return (
    <div className={isClick ? "sub-image-click" : "sub-image-item"}>
      <Image
        src={imgURL}
        layout="responsive"
        width={75}
        height={75}
        alt={imgAlt}
        className={isClick ? "sub-feature-image pointer" : "sub-image"}
        onMouseOver={() => (isClick ? null : setImage(imgURL))}
        onClick={() => (isClick ? handleClickedColor(identity) : null)}
        style={
          isClick
            ? pickItem == identity
              ? { outline: "#191919 solid 2px", outlineOffset: "2px" }
              : null
            : null
        }
      />
    </div>
  );
}
