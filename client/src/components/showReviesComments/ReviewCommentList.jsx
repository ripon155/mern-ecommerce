import PropTypes from "prop-types";
import Rating from "../ratting/Ratting";
import img from "./../../assets/products/electronic1.jpg";
import moment from "moment";
import { AiFillDelete } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useRemoveReviewMutation } from "../../store";

function ReviewCommentList({ comment }) {
  // format("MMMM D, YYYY, HH:mm:ss")
  const { proId } = useParams();

  const [removeReview] = useRemoveReviewMutation();

  const handleClick = () => {
    removeReview({ id: comment._id, proId, review: comment });
  };

  return (
    <>
      <div className="shadow w-1/5 p-1">
        <img src={img} alt="" className="h-20 w-20 border-red-2 rounded" />
        <h2>
          {comment.user.name.charAt(0).toUpperCase() +
            comment.user.name.slice(1)}
        </h2>
        <div className="rattings-wrap flex text-orange-600 my-4">
          <Rating maxStars={5} initialRating={comment.rating} />
        </div>
        <div className=" pb-4">
          <p className="text-sm ">{comment.review}</p>
          <p className="text-sm">{moment(comment.createdAt).fromNow()}</p>
        </div>
        <AiFillDelete className="cursor-pointer" onClick={handleClick} />
      </div>
    </>
  );
}

ReviewCommentList.propTypes = {
  comment: PropTypes.object,
};

export default ReviewCommentList;
