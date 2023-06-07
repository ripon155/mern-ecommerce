import "./navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { logOut } from "../../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

function Navbar({ cart }) {
  //get state
  const { token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOut("logout"));
    navigate("/login");
  };
  return (
    <div className="navbar">
      <Link to="/">
        <div className="navbar-item">Home</div>
      </Link>
      <div className="navbar-item">Search</div>
      <div className="navbar-item">Contact</div>

      {token === null ? (
        <Link to="/login">
          <div className="navbar-item">Login</div>
        </Link>
      ) : (
        <div className="navbar-item" onClick={handleLogOut}>
          LogOut
        </div>
      )}

      <Link to="/reg">
        <div className="navbar-item">Registration</div>
      </Link>
      <div className="navbar-item">About</div>
      <div className="cart-icon-wrap">
        <Link to="/cart">
          <AiOutlineShoppingCart className="cart-icon" />
          <div className="cart-value">
            <span>{cart ? cart.length : 0}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
Navbar.propTypes = {
  cart: PropTypes.array,
};
export default Navbar;
