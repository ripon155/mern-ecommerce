import "./App.css";

import Home from "./pages/home/Home";
import Product from "./pages/singlePro/Product";
import Navbar from "./components/navbar/Navbar";
import { useState, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import CheckOutMessage from "./pages/checkoutMessage/CheckOutMessage";
import Registration from "./pages/register/Registration";
import Login from "./pages/login/Login";

import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const [cart, setCart] = useState([]);

  const { token } = useSelector((state) => state.auth);
  // const navigate = useNavigate();

  // Add to cart
  const onAddToCart = (product) => {
    const updateCart = [...cart, product];
    setCart(updateCart);
  };

  //update cart item
  const updateCartQuantity = useCallback((updateProduct) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === updateProduct.id ? updateProduct : item
      );
      return updatedCart;
    });
  }, []);

  //delete Cart item
  const removeCartItem = (item) => {
    setCart((prevCartItem) => {
      return prevCartItem.filter((pre) => pre.id !== item.id);
    });
  };

  // useEffect(() => {
  //   console.log(cart);
  // }, [cart]);

  return (
    <Router>
      <div>
        <Navbar cart={cart} />
        <Routes>
          <Route
            path="/login"
            element={token ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/*"
            element={
              <>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route
                    path="/products/:proId"
                    element={<Product onAddToCart={onAddToCart} />}
                  />
                  <Route
                    path="/cart"
                    element={
                      <Cart
                        cart={cart}
                        removeCartItem={removeCartItem}
                        updateCartQuantity={updateCartQuantity}
                      />
                    }
                  />
                  <Route path="/checkout-msg" element={<CheckOutMessage />} />
                  <Route path="/reg" element={<Registration />} />
                </Routes>
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
