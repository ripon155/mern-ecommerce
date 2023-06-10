import { Link } from "react-router-dom";

function SIdebar() {
  return (
    <div className="w-1/6  h-screen shadow bg-slate-800 text-white ">
      <Link to="/">
        <div className=" cursor-pointer p-2 hover:bg-slate-500 hover:text-slate-950 ">
          Product
        </div>
      </Link>
      <Link to="/order">
        <div className=" cursor-pointer p-2 hover:bg-slate-500 hover:text-slate-950 ">
          Orders
        </div>
      </Link>
      <Link to="/addproduct">
        <div className=" cursor-pointer p-2 hover:bg-slate-500 hover:text-slate-950 ">
          Add Product
        </div>
      </Link>
    </div>
  );
}

export default SIdebar;
