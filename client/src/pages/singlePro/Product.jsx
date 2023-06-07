import { AiOutlineStar } from "react-icons/ai";
import { useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
// import { useLocation } from "react-router-dom"; //useParams

import AddComment from "../../components/addComment/AddComment";

import { useGetProductByIdQuery } from "../../store";
import Skeleton from "../../components/skeleton/Skeleton";

function Product({ handleComment, onAddToCart }) {
  const [count, setCount] = useState(1);
  const [activeTab, setActiveTab] = useState("details");

  // const { state } = useLocation();
  const { proId } = useParams();

  const { data, isLoading, error } = useGetProductByIdQuery(proId);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleAddToCart = () => {
    const img = data.data.imgUrl;
    onAddToCart({
      name: data.data.name,
      price: data.data.price,
      id: data.data._id,
      quantity: count,
      imgUrl: img,
    });
  };

  let renderProduct;

  if (isLoading) {
    renderProduct = <Skeleton clasName=" h-10 w-full" />;
  } else if (error) {
    renderProduct = <div> error</div>;
  } else {
    renderProduct = (
      <div className="container px-4 flex flex-wrap mb-6">
        <div className="w-1/4 ">
          <div className="h-90 w-90 shadow">
            <img src={data.data.imgUrl} alt="" />
          </div>
        </div>
        <div className="w-2/4 p-4">
          <h1 className="text-3xl font-bold">{data.data.name}</h1>
          <div className="sort-rating flex items-center gap-3 mt-5">
            <div className="w-12 h-4 bg-black text-white flex justify-center items-center">
              <span className="p-1">{data.data ? data.data.rating : 0}</span>
              <AiOutlineStar className="text-yellow-500" />
            </div>
            <div className="total-rating text-sky-600">
              ({data.data ? data.data.numRating : 0})
            </div>
          </div>
          <div className="price-details my-6 flex items-center gap-4">
            <div className="text-slate-400">$ {data.data.price}</div>
            <div className="h-5 w-20 text-white bg-black flex justify-center items-center">
              <span>48% off</span>
            </div>
          </div>
          <div className="my-6 flex  items-center gap-2">
            <div className="quantity  flex items-center">
              <div
                className="border-2 p-3 cursor-pointer text-lg"
                onClick={() => setCount(count - 1)}
              >
                -
              </div>
              <div className="border-2 p-3 text-lg">{count}</div>
              <div
                className="border-2 p-3 cursor-pointer text-lg"
                onClick={() => setCount(count + 1)}
              >
                +
              </div>
            </div>

            {/* <Link to="/cart"> */}
            <div
              onClick={handleAddToCart}
              className="card bg-gray-600 p-2 rounded text-white cursor-pointer text-center"
            >
              Add to Card
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <div className="h-56 w-4/5 shadow flex items-center justify-center flex-col">
            <div className="text-gray-500">Sold BY</div>
            <div className="text-gray-800 font-semibold">Test Stores</div>
            <div className="text-gray-500">Total Items</div>
            <button className="rounded bg-gray-500 text-white px-4 my-3  hover:outline">
              Visite Store
            </button>
            <button className="rounded bg-gray-500 text-white px-4">
              Contact Seller
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="product">
      <div className="h-40 mb-8 bg-slate-950  flex justify-center items-center">
        <h2 className="text-white text-3xl">Product Details </h2>
      </div>
      {renderProduct}

      <div className="w-3/4 flex gap-4  container mx-auto border-b-2 mb-6">
        <div
          className={`details cursor-pointer hover:border-b-2 hover:border-purple-700 ${
            activeTab === "details" ? "border-b-2 border-purple-700" : ""
          }`}
          onClick={() => handleTabClick("details")}
        >
          Details
        </div>
        <div
          className={`reviews cursor-pointer hover:border-b-2 hover:border-purple-700 ${
            activeTab === "reviews" ? "border-b-2 border-purple-700" : ""
          }`}
          onClick={() => handleTabClick("reviews")}
        >
          Reviews
        </div>
      </div>
      <div className="w-3/4 mx-auto">
        {activeTab === "details" && (
          <p>{!isLoading && data.data.description}</p>
        )}
      </div>
      <div className="w-3/4 mx-auto mb-6">
        {activeTab === "reviews" && (
          <>
            <div className="add-comment my-3 border-b-2">
              <AddComment handleComment={handleComment} proId={proId} />
            </div>
            <div className="review-wrap flex flex-wrap gap-6  ">
              {/* <ReviewCommentList /> */}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
Product.propTypes = {
  handleComment: PropTypes.func,
  onAddToCart: PropTypes.func,
  comments: PropTypes.array,
};
export default Product;
