import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaStar } from "react-icons/fa";
import "./CSS/Reviews.css";

const reviewsData = [
  {
    name: "RITESH CHAUHAN",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
    comment: "Good",
  },
  {
    name: "NAMAN SHARMA",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5,
    comment: "Good",
  },
  {
    name: "Manpreet Kaur",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 4,
    comment: "Nice content!",
  },
  {
    name: "Sneha Kapoor",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5,
    comment: "Very detailed explanations!",
  },
  {
    name: "Amit Verma",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 4,
    comment: "Good course for beginners.",
  },
  {
    name: "Priya Singh",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 5,
    comment: "Excellent course!",
  },
];

const Reviews = () => {
  const [visibleReviews, setVisibleReviews] = useState(2); // Initially, show 2 reviews
  const reviewsPerLoad = 2; // Load 2 more on each click

  const handleShowMore = () => {
    setVisibleReviews((prev) =>
      Math.min(prev + reviewsPerLoad, reviewsData.length)
    );
  };

  const handleShowLess = () => {
    setVisibleReviews(2); // Reset to initial 2 reviews
  };

  return (
    <div className="reviews-container">
      <h3 className="reviews-title">
        Reviews <span>({reviewsData.length})</span>
      </h3>
      {reviewsData.slice(0, visibleReviews).map((review, index) => (
        <div key={index} className="review-card">
          <div className="review-stars">
            {[...Array(review.rating)].map((_, i) => (
              <FaStar key={i} className="star-icon" />
            ))}
          </div>
          <div className="review-header">
            <img
              src={review.avatar}
              alt={review.name}
              className="review-avatar"
            />
            <h4 className="review-name">{review.name}</h4>
          </div>
          <p className="review-comment">{review.comment}</p>
        </div>
      ))}
      <div className="buttons-container">
        {visibleReviews < reviewsData.length && (
          <button className="view-more-button" onClick={handleShowMore}>
            View more <FaChevronDown />
          </button>
        )}
        {visibleReviews > 2 && (
          <button className="view-less-button" onClick={handleShowLess}>
            View less <FaChevronUp />
          </button>
        )}
      </div>
    </div>
  );
};

export default Reviews;
