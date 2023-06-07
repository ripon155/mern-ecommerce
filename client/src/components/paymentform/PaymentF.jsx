import { useCheckoutMutation } from "../../store";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function PaymentF({ cart }) {
  const [checkout, results] = useCheckoutMutation();
  const { data, isSuccess } = results;

  const { token } = useSelector((state) => state.auth);

  const handleClick = () => {
    checkout(cart);
    window.location.href = data.url;
    if (isSuccess) {
      window.location.href = data.url;
    }
  };

  return (
    <div>
      {token ? (
        <button
          onClick={handleClick}
          className="mt-8 border border-transparent hover:border-gray-300 dark:bg-white dark:hover:bg-gray-900 dark:text-gray-900 dark:hover:text-white dark:border-transparent bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full"
        >
          <div>
            <p className="text-base leading-4">CheckOut</p>
          </div>
        </button>
      ) : (
        <Link to="/login" replace>
          <button className="mt-8 border border-transparent hover:border-gray-300 dark:bg-white dark:hover:bg-gray-900 dark:text-gray-900 dark:hover:text-white dark:border-transparent bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
            <div>
              <p className="text-base leading-4">CheckOut</p>
            </div>
          </button>
        </Link>
      )}
    </div>
  );
}
PaymentF.propTypes = {
  cart: PropTypes.array,
};
export default PaymentF;
