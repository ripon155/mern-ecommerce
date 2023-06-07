import { useCheckoutMutation } from "../../store";
import PropTypes from "prop-types";

function PaymentF({ cart }) {
  const [checkout, results] = useCheckoutMutation();
  const { data, isSuccess } = results;

  const handleClick = () => {
    console.log(cart);
    checkout(cart);
    window.location.href = data.url;
    if (isSuccess) {
      window.location.href = data.url;
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="mt-8 border border-transparent hover:border-gray-300 dark:bg-white dark:hover:bg-gray-900 dark:text-gray-900 dark:hover:text-white dark:border-transparent bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full"
      >
        <div>
          <p className="text-base leading-4">CheckOut</p>
        </div>
      </button>
    </div>
  );
}
PaymentF.propTypes = {
  cart: PropTypes.array,
};
export default PaymentF;
