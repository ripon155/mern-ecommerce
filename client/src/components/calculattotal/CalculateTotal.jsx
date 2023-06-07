import PropTypes from "prop-types";
import PaymentF from "../paymentform/PaymentF";

function CalculateTotal({ cart }) {
  console.log(cart);
  let total;
  if (cart) {
    total = cart.reduce((acc, cur) => {
      return acc + cur.price * cur.quantity;
    }, 0);
  }

  return (
    <>
      <h1 className="bg-slate-100 p-2 border">CART TOTALS</h1>
      <div className="subtotal p-2 border-b-2 flex">
        <h2 className="w-1/2 self-start font-bold">Subtotal</h2>
        <p className="w-1/2 self-start">${total ? total : 0}</p>
      </div>
      <div className="subtotal p-2 border-b-2 flex">
        <h2 className="w-1/2 self-start font-bold">Discount</h2>
        <p className="w-1/2 self-start">0</p>
      </div>
      <div className="subtotal p-2 border-b-2 flex">
        <h2 className="w-1/2 self-start font-bold">Total</h2>
        <p className="w-1/2 self-start">${total ? total : 0}</p>
      </div>
      <PaymentF cart={cart} />
    </>
  );
}

CalculateTotal.propTypes = {
  cart: PropTypes.array,
};

export default CalculateTotal;
