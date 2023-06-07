import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useState } from "react";
import PropTypes from "prop-types";

const Rating = ({ maxStars, initialRating, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    onRatingChange(selectedRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= maxStars; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => handleStarClick(i)}
          className={`text-xl cursor-pointer ${
            i <= rating ? "text-yellow-500" : "text-gray-500"
          }`}
        >
          {i <= rating ? <AiFillStar /> : <AiOutlineStar />}
        </span>
      );
    }
    return stars;
  };

  return <>{renderStars()}</>;
};

Rating.propTypes = {
  onRatingChange: PropTypes.func,
  maxStars: PropTypes.number,
  initialRating: PropTypes.number,
};

export default Rating;
