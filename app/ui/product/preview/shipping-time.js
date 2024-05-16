import { month } from "@/app/lib/time-data";
import { productData } from "@/app/lib/data";

export default function ShippingTime({ code }) {
  const { minTime, maxTime } = productData.find(item => item.productCode == code);
  const minDelivery = 86400000 * minTime;
  const maxDelivery = 86400000 * maxTime;
  const today = new Date().getTime();
  const minDay = new Date(today + minDelivery);
  const maxDay = new Date(today + maxDelivery);

  const minDate = minDay.getDate();
  const minMonth = month[minDay.getMonth()];

  const maxDate = maxDay.getDate();
  const maxMonth = month[maxDay.getMonth()];
  return (
    <div>
      <div className="padding-10">
        <p className="font-w-500">Free Shipping</p>
        <p className="delivery-period">
          Get product by{" "}
          <span>
            {minDate} {minMonth} - {maxDate} {maxMonth}
          </span>
        </p>
      </div>
    </div>
  );
}
