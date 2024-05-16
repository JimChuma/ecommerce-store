import SubImage from "./sub-image";

export default function ColorFeatures({
  code,
  setImage,
  pickItem,
  setPickItem,
}) {
  return (
    <div>
      <SubImage
        code={code}
        setImage={setImage}
        pickItem={pickItem}
        setPickItem={setPickItem}
        isClick={true}
      />
    </div>
  );
}
