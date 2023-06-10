import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Heaer from "./component/Heaer";
import SIdebar from "./component/SIdebar";
import AddProduct from "./pages/AddProduct";
import Order from "./pages/Order";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Router>
        <Heaer />
        <div className="flex overflow-hidden">
          <SIdebar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/order" element={<Order />} />
            <Route path="/addproduct" element={<AddProduct />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
