import { GoStarFill } from "react-icons/go";

const Review = ({
  reviewImage,
  reviewName,
  reviewText,
  reviewPostedTime,
  className,
}) => {
  return (
    <div
      className={`mb-[16px] sm:mb-[20px] pb-3 sm:pb-4 border-b border-[#E6E6E6] ${className}`}
    >
      <div className="flex justify-between">
        <div className="flex items-center mb-[3px] sm:mb-[13px]">
          <div className="w-[32px] sm:w-[41px]">
            <img src={reviewImage} alt="Review Image" className="w-full" />
          </div>
          <div className="ml-3 pb-[2px]">
            <h4 className="mb-[2px] font-[outfit] font-[500] text-[14px] text-[#1A1A1A]">
              {reviewName}
            </h4>
            <div className="flex items-center text-star">
              <span>
                <GoStarFill />
              </span>
              <span>
                <GoStarFill />
              </span>
              <span>
                <GoStarFill />
              </span>
              <span>
                <GoStarFill />
              </span>
              <span>
                <GoStarFill />
              </span>
            </div>
          </div>
        </div>
        <span className="font-[poppins] font-[400] text-[12px] sm:text-[14px] text-[#999999]">
          {reviewPostedTime}
        </span>
      </div>
      <p className="font-[roboto] sm:font-[outfit] font-[400] text-[14px] sm:text-[16px] text-[#808080] leading-[21px] sm:leading-[24px] w-full lg:w-4/5 xl:w-3/5">
        {reviewText}
      </p>
    </div>
  );
};

export default Review;
