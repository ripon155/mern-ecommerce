import OrderList from "../component/OrderList";

function Order() {
  const initialOrders = [
    { id: 1, name: "Mobile", quantity: 1, email: "ripon@gmail", price: 1000 },
    { id: 2, name: "Laptop", quantity: 2, email: "moni@gmail", price: 12000 },
    { id: 3, name: "Watch", quantity: 10, email: "sakil@gmail", price: 21000 },
    { id: 4, name: "Charger", quantity: 1, email: "jannat@gmail", price: 100 },
  ];

  return (
    <div className="w-5/6">
      <OrderList orders={initialOrders} />
    </div>
  );
}

export default Order;
