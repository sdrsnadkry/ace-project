import React, { useState } from "react";

const RatingCard = (props) => {
  const [rating, setRating] = useState(props.review.rating);

  const handleRating = (value) => {
    setRating(value);
  };

  console.log(props.review.comment);

  return (
    <div className="max-w-sm p-6 mx-auto bg-white rounded-lg shadow-lg">
      {/* User Info */}
      <div className="flex items-center mb-4">
        <div>
          <h2 className="text-lg font-bold text-gray-800">
            {props.review.reviewerName}
          </h2>
          <h2 className="text-gray-800 text-md">
            {props.review.reviewerEmail}
          </h2>
        </div>
      </div>

      {/* Feedback Text */}
      <p className="mb-4 text-gray-600">{props.review.comment}</p>

      {/* Star Rating */}
      <div className="flex items-center mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleRating(star)}
            className={`text-2xl ${
              star <= rating ? "text-yellow-400" : "text-gray-300"
            } focus:outline-none`}
          >
            ★
          </button>
        ))}
      </div>
    </div>
  );
};

export default RatingCard;
