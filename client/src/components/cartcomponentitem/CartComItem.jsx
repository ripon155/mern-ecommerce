import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function CartComItem({ item, removeCartItem, updateCartQuantity }) {
  const [quantity, setQuantity] = useState(item.quantity || 1);

  useEffect(() => {
    updateCartQuantity({ ...item, quantity: quantity });
  }, [quantity]);

  const handleRemoveItem = () => {
    removeCartItem(item);
  };
  return (
    <div>
      <div className="card-product flex items-center justify-around p-3 border-b-2">
        <div className="">
          <img className="h-20 w-20" src={item ? item.imgUrl : ""} alt="" />
        </div>
        <div className="">${item ? item.price : 0}</div>
        <div className="flex items-center gap-1">
          <div
            className="border-2 px-3 border-slate-900 cursor-pointer"
            onClick={() => setQuantity(quantity - 1)}
          >
            -
          </div>
          <div className="border-2 px-3 border-slate-900">{quantity}</div>
          <div
            className="border-2 px-3 border-slate-900 cursor-pointer "
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </div>
        </div>
        <div className="">${item ? item.quantity * item.price : 1}</div>
        <div className="cursor-pointer" onClick={handleRemoveItem}>
          X
        </div>
      </div>
    </div>
  );
}

CartComItem.propTypes = {
  item: PropTypes.object,
  onAddToCart: PropTypes.func,
  removeCartItem: PropTypes.func,
  updateCartQuantity: PropTypes.func,
};

export default CartComItem;
