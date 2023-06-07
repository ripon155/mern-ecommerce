import PropTypes from "prop-types";
import Rating from "../ratting/Ratting";
import { Link } from "react-router-dom";

function ProductListItem({ item }) {
  return (
    <>
      <div className="  text-center cursor-pointer hover:shadow ">
        <Link className="w-1/4 " to={"/products/" + item._id} state={item}>
          <img src={item.imgUrl} alt="" className="w-full h-64 p-2" />
          <h4>{item.name}</h4>
          <p>${item.price}.00</p>
          <div className="flex justify-center text-orange-600">
            <Rating maxStars={5} initialRating={item.rating} />
          </div>
        </Link>
        <Link to={"/products/" + item._id} state={item}>
          <div className="rounded bg-slate-950 p-2 text-white cursor-pointer m-2">
            Buy Now
          </div>
        </Link>
      </div>
    </>
  );
}

ProductListItem.propTypes = {
  item: PropTypes.object,
};

export default ProductListItem;
