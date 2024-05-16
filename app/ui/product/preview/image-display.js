import MainImage from "./main-image";
import SubImage from "./sub-image";

export default function ImageDisplay({ code, newImage, setImage }) {
  return (
    <div className="product-grid-1">
      <MainImage code={code} newImage={newImage} />
      <SubImage code={code} setImage={setImage} isClick={false} />
    </div>
  );
}
