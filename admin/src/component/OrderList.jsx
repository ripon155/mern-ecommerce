import OrderShow from "./OrderShow";
import PropTypes from "prop-types";

function OrderList({ orders }) {
  const renderOrder = orders.map((order, index) => {
    return <OrderShow key={index} order={order} />;
  });
  return (
    <div className="m-6">
      <div className="p-4 flex items-center justify-between border font-bold">
        <div>SL</div>
        <div>Name</div>
        <div>Price</div>
        <div>Email</div>
        <div>Quantity</div>
      </div>

      {renderOrder}
    </div>
  );
}

OrderList.propTypes = {
  orders: PropTypes.array,
};

export default OrderList;
