import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";

export default function StarRating({ rating }) {
  // CREATING DUMMY NUMBERS TO POPULATE
  //   ARRAYS AND PROVIDE UNIQUE KEYS FOR COMPONENTS

  const [interger, decimal] = rating.split(".");
  const full = populateFullStar(interger);
  const half = [];
  if (decimal != 0) {
    half.push(Math.random() * Math.random());
  }
  const remainder = 5 - full.length - half.length;
  const none = populateEmptyStar(remainder);
  return (
    <>
      {full.map((item) => {
        return <StarRateRoundedIcon key={item} />;
      })}
      {half.map((item) => {
        return <StarHalfRoundedIcon key={item} />;
      })}
      {none.map((item) => {
        return <StarOutlineRoundedIcon key={item} />;
      })}
    </>
  );
}

function populateFullStar(interger) {
  const array = [];
  for (let i = 0; i < interger; i++) {
    array.push(i * i * Math.random() + Math.random());
  }
  return array;
}

function populateEmptyStar(remainder) {
  const array = [];
  for (let i = 0; i < remainder; i++) {
    array.push(i + Math.random() + Math.random() + Math.random());
  }
  return array;
}
