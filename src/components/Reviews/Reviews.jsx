import { useState } from "react";
import content from "../../content/content";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState(content.reviewsContent);

  return (
    <section>
      <div className="container mx-auto">
        <div className="mt-5">
          <div className="flex items-center gap-[9px] font-[500] mb-4">
            <h2 className="text-[20px] sm:text-[28px] text-lightBlack">
              Reviews
            </h2>
            <span className="text-[16px] sm:text-[24px] text-[#A6A8B1]">
              (120)
            </span>
          </div>

          <div>
            {reviews.map((review, index) => {
              if (index === reviews.length - 1) {
                return (
                  <Review key={review.id} {...review} className="border-b-0" />
                );
              }

              return <Review key={review.id} {...review} />;
            })}
          </div>
        </div>

        <div className="font-[600] text-[16px]">
          <button className="w-[108px] sm:w-[198px] h-[50px] flex items-center justify-center rounded-[12px] py-[17px] px-[16px] bg-transparent text-secondary border-[2px] border-secondary hover:bg-secondary hover:text-white hover:border-[2px] hover:border-transparent transition-all mx-auto">
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
