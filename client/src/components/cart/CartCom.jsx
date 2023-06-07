import PropTypes from "prop-types";
import CartComItem from "../cartcomponentitem/CartComItem";

function CartCom({ cart, removeCartItem, updateCartQuantity }) {
  let renderCartItem;
  if (cart) {
    renderCartItem = cart.map((item, index) => {
      return (
        <CartComItem
          key={index}
          item={item}
          removeCartItem={removeCartItem}
          updateCartQuantity={updateCartQuantity}
        />
      );
    });
  }
  return <div>{renderCartItem}</div>;
}

CartCom.propTypes = {
  cart: PropTypes.array,
  onAddToCart: PropTypes.func,
  removeCartItem: PropTypes.func,
  updateCartQuantity: PropTypes.func,
};

export default CartCom;
