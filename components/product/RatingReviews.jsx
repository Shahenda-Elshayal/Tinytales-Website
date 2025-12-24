"use client";

import { useState } from "react";
import Image from "next/image";

// Star component for ratings
const Star = ({ filled, size = "w-4 h-4" }) => {
  return (
    <svg
      className={size}
      viewBox="0 0 24 24"
      fill={filled ? "#BE968E" : "none"}
      stroke="#BE968E"
      strokeWidth="2"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
};

// Progress bar component
const ProgressBar = ({ percentage }) => {
  return (
    <div className="flex-1 h-[6px] bg-[#E6E6E6] rounded-[12px] overflow-hidden">
      <div
        className="h-full bg-[#BE968E] rounded-[12px] transition-all"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default function RatingReviews({
  overallRating = 4.5,
  totalReviews = 3000,
  ratingDistribution = [
    { stars: 5, percentage: 67 },
    { stars: 4, percentage: 15 },
    { stars: 3, percentage: 6 },
    { stars: 2, percentage: 3 },
    { stars: 1, percentage: 9 },
  ],
  reviews = [
    {
      id: 1,
      name: "Alex Daewn",
      rating: 4,
      timestamp: "4 months ago",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      rating: 5,
      timestamp: "2 months ago",
      text: "Great product! Very satisfied with the quality and delivery.",
    },
    {
      id: 3,
      name: "Michael Chen",
      rating: 4,
      timestamp: "1 month ago",
      text: "Good value for money. The material is comfortable and durable.",
    },
    {
      id: 4,
      name: "Emily Davis",
      rating: 5,
      timestamp: "3 weeks ago",
      text: "Excellent quality! Would definitely recommend to others.",
    },
  ],
}) {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 4);

  return (
    <div className="w-full lg:mt-[99px] mt-[61px] ">
      <div className="mx-5 md:mx-[120px]">
        {/* Title */}
        <div className="mb-5">
          <h2 className="text-[16px] lg:text-[24px] font-semibold text-[#020202] mb-[2px]">
            Rating & Reviews
          </h2>
          <div className="w-[40px] h-[4px] rounded-[16px] bg-[#BE968E]"></div>
        </div>
        {/* Rating Summary Section */}
        <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row items-center mb-[40px] lg:mb-[64px]">
          {/* Overall Rating - Left */}
          <div className="flex w-fit items-baseline lg:gap-5 gap-4">
            <span className="text-[80px] lg:text-[120px] font-medium text-[#020202]">
              {overallRating}
            </span>
            <span className="text-[24px] text-[#B0B0B0]">/5</span>
          </div>

          {/* Star Distribution - Middle */}
          <div className="space-y-2 lg:ml-[40px] lg:mr-[141px] lg:w-[484px] w-full">
            {ratingDistribution.map((item) => (
              <div key={item.stars} className="flex items-center gap-4 ">
                <div className="flex items-center gap-2 min-w-[60px]">
                  <Star filled={true} size="w-6 h-6" />
                  <span className="text-[20px] text-[#020202] font-medium">
                    {item.stars}
                  </span>
                </div>
                <ProgressBar percentage={item.percentage} />
                <span className="text-[20px] font-medium text-[#545454] min-w-[40px] ml-[5px]">
                  {item.percentage}%
                </span>
              </div>
            ))}
          </div>

          {/* Total Reviews and Add Comment Button - Right */}
          <div className="hidden  lg:flex flex-col items-center">
            <div className="text-center mb-[14px]">
              <p className="text-sm text-[#545454]">Total Reviews</p>
              <p className="text-[60px] font-semibold text-[#020202]">
                {(totalReviews / 1000).toFixed(1)}K
              </p>
            </div>

            <button className="flex items-center justify-center cursor-pointer gap-2 px-8 py-4 bg-[#BE968E] text-white rounded-[12px] hover:bg-[#a8857d] transition-colors">
              <span className="font-medium text-[16px] text-nowrap">
                Add Comment
              </span>
              <Image
                src="/images/icons/comment.svg"
                alt="comment"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>

        {/* Individual Reviews */}
        <div className="lg:space-y-[32px] md:max-w-[1102px] max-w-[353px] space-y-[20px]">
          {displayedReviews.map((review, index) => (
            <div
              key={review.id}
              className={`lg:pb-[32px] pb-[20px] ${
                index < displayedReviews.length - 1
                  ? "border-b-2 border-[#F4F7F9]"
                  : ""
              }`}
            >
              <div className="flex items-center justify-between gap-2 lg:mb-[20px] mb-[8px]">
                <div className="flex items-center lg:gap-4 gap-2">
                  <span className="font-semibold text-black lg:text-[20px] text-[14px]">
                    {review.name}
                  </span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        filled={star <= review.rating}
                        size="lg:w-5 lg:h-5 w-4 h-4"
                      />
                    ))}
                  </div>
                </div>

                <span className="lg:text-sm text-[10px] font-medium  text-[#8A8A8A] lg:text-[#545454]">
                  {review.timestamp}
                </span>
              </div>

              <p className="lg:text-[16px] text-[12px] text-[#020202] lg:font-normal font-medium">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        {/* View More Comments Button */}
        <div className="mt-[4px]  lg:mt-0 flex items-center justify-center">
          <button
            onClick={() => setShowAllReviews(true)}
            className="p-4 cursor-pointer w-[207px] flex items-center justify-center bg-[#F5F5F5] text-[#BE968E] rounded-[12px] font-semibold text-[14px]"
          >
            View More Comments
          </button>
        </div>
      </div>
    </div>
  );
}
