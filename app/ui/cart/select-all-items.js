import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function SelectAllItems({
  select,
  selectAll,
  clickSelectAll,
  deleteSelectAll,
}) {
  return (
    <div className="select-delete-container">
      <div className="select-all-div" onClick={() => clickSelectAll(selectAll)}>
        {selectAll ? (
          <CheckCircleIcon className="circle-checked" />
        ) : (
          <span className="circle-unchecked"></span>
        )}
        <span className="select-all-text">Select all items</span>
      </div>
      {select.length !== 0 ? (
        <div
          className="delete-select-div"
          onClick={() => deleteSelectAll(true)}
        >
          <span>Delete selected items</span>
        </div>
      ) : null}
    </div>
  );
}
