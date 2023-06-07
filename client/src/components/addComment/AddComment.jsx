import PropTypes from "prop-types";
import { useState } from "react";
import Ratting from "../ratting/Ratting";
import { useAddReviewMutation, useGetReviewByIdQuery } from "../../store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReviewCommentList from "./../showReviesComments/ReviewCommentList";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Skeleton from "../skeleton/Skeleton";

function AddComment({ proId }) {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const [addReview, { isSuccess }] = useAddReviewMutation();
  const { data, error, isLoading } = useGetReviewByIdQuery(proId);

  const { token } = useSelector((state) => state.auth);

  const notify = (mesg) => toast.success(mesg);

  const handleSubmit = (event) => {
    event.preventDefault();

    addReview({ review, rating, id: proId });
    setReview("");
    if (isSuccess) {
      notify("Review Added !");
    }
  };

  const onRatingChange = (rating) => {
    setRating(rating);
  };

  const renderRatting = (
    <Ratting maxStars={5} initialRating={0} onRatingChange={onRatingChange} />
  );

  let renderComment;
  if (isLoading) {
    renderComment = <Skeleton times={7} clasName=" h-10 w-full" />;
  } else if (error) {
    renderComment = <div>Error</div>;
  } else {
    renderComment = data.data.map((comment, index) => {
      return <ReviewCommentList key={index} comment={comment} />;
    });
  }

  // if (data && data.data) {
  //   renderComment = data.data.map((comment, index) => {
  //     return <ReviewCommentList key={index} comment={comment} />;
  //   });
  // }

  return (
    <>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <h1>Add Comment and Review</h1>
        <div className="flex items-center my-4 cursor-pointer">
          {renderRatting}
        </div>
        <textarea
          type="text"
          placeholder="comments"
          name="comment"
          className="border p-6  w-2/4 my-3"
          value={review}
          onChange={(event) => setReview(event.target.value)}
        />
        {token ? (
          <>
            {" "}
            <ToastContainer position="top-left" />
            <button className=" bg-gray-600 p-2 rounded text-white cursor-pointer w-1/4 mb-3">
              Add comment
            </button>{" "}
          </>
        ) : (
          <div className="text-fuchsia-950 p-3 text-3xl">
            <Link className="underline" to="/login">
              Login first to add review
            </Link>
          </div>
        )}
      </form>
      <div className="review-wrap flex flex-wrap gap-6  ">{renderComment}</div>
    </>
  );
}

AddComment.propTypes = {
  proId: PropTypes.string,
};

export default AddComment;
