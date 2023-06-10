import PropTypes from "prop-types";

function OrderShow({ order }) {
  return (
    <div className="border flex items-center justify-between p-4">
      <div>2</div>
      <div>{order.name}</div>
      <div>${order.price}.00</div>
      <div>{order.email}</div>
      <div>{order.quantity}</div>
    </div>
  );
}

OrderShow.propTypes = {
  order: PropTypes.object,
};

export default OrderShow;
