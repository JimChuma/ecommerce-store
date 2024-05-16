import AmountSummary from "./amount-summary";
import PaymentSummary from "./payment-summary";

export default function CheckoutSummary({ cartItems, select }) {
  return (
    <div className="summary-section-view">
      <AmountSummary cartItems={cartItems} select={select} />
      <PaymentSummary />
    </div>
  );
}
