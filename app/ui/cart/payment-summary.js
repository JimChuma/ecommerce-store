import Image from "next/image";

export default function PaymentSummary() {
  const cards = [
    "visa.png",
    "mastercard.webp",
    "american-express.webp",
    "paypal.webp",
    "gpay.webp",
    "apple-pay.webp",
  ];
  return (
    <div className="payment-summary-div">
      <h3>Pay with</h3>
      <div className="payment-cards">
        {cards.map((item, index) => {
          return (
            <Image
              key={"payment-cards-" + index}
              src={"/payment/" + item}
              width={36}
              height={24}
              alt={"payment-cards-" + index}
            />
          );
        })}
      </div>
    </div>
  );
}
