// components/property/ReviewSection.tsx
import React from "react";
import { ReviewProps } from "@/interfaces";

const ReviewSection: React.FC<{ reviews: ReviewProps[] }> = ({ reviews }) => {
  return (
    <div className="mt-6">
      <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((review, index) => (
          <div key={index} className="border-b pb-4 mb-4">
            <div className="flex items-center mb-2">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <p className="font-bold">{review.name}</p>
                <p className="text-yellow-500">{review.rating} ★</p>
              </div>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewSection;

