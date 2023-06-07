import CalculateTotal from "../../components/calculattotal/CalculateTotal";
import CartCom from "../../components/cart/CartCom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Cart({ cart, removeCartItem, updateCartQuantity }) {
  return (
    <div className="cart">
      <div className="h-40 mb-8 bg-slate-950  flex justify-center items-center">
        <h2 className="text-white text-3xl font-bold">
          <Link to="/">
            <span>Home</span>
          </Link>{" "}
          /Cart Details
        </h2>
      </div>

      <div className="conatiner mx-10 flex gap-10 ">
        <div className="w-3/5 border">
          <div className="border p-3 flex items-center justify-evenly  bg-slate-100">
            <div className="font-lg">Product</div>
            <div className="font-lg">Price</div>
            <div className="font-lg">Quantity</div>
            <div className="font-lg">Subtotal</div>
            <div className="font-lg"></div>
          </div>

          <CartCom
            cart={cart}
            removeCartItem={removeCartItem}
            updateCartQuantity={updateCartQuantity}
          />
        </div>
        <div className="w-2/5 border">
          <CalculateTotal cart={cart} />
        </div>
      </div>
    </div>
  );
}
Cart.propTypes = {
  cart: PropTypes.array,
  onAddToCart: PropTypes.func,
  removeCartItem: PropTypes.func,
  updateCartQuantity: PropTypes.func,
};
export default Cart;
