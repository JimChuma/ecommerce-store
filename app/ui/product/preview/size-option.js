export default function SizeOption({ option, size, setSize, identity }) {
  return (
    <>
      <span
        className="size-option pointer"
        onClick={() => setSize(identity)}
        style={size == identity ? { outlineWidth: "2px" } : null}
      >
        {option}
      </span>
    </>
  );
}
