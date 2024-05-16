export default function AmountSummary({ cartItems, select }) {
  const amountData = select.map((item) => Number(item.amount * item.quantity));
  let sumData = 0;
  amountData.forEach((value) => (sumData += value));
  const sum = sumData.toFixed(2);
  return (
    <div className="amount-summary-div">
      <h2>Summary</h2>
      <p className="subtotal-fees">
        <span>Subtotal</span>
        <span>US ${sum}</span>
      </p>
      <p className="subtotal-fees">
        <span>Shipping fee</span>
        <span>US $0.00</span>
      </p>
      <p className="total-amount-summary">
        <span className="total-amount-text">Total</span>
        <span className="total-amount-number">US ${sum}</span>
      </p>
      <p className="checkout-button">
        <span>Checkout ({select.length})</span>
      </p>
    </div>
  );
}
