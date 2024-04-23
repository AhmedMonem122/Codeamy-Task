import { FiArrowRight } from "react-icons/fi";

const SingleMediaSliderNextArrow = ({ className, style, onClick }) => {
  return (
    <button
      className={`${className} w-[24px] h-[26px] text-[13px] md:w-[46px] md:h-[46px] md:text-[24px] right-[1%] sm:right-[4%] md:right-[8%] rounded-full before:contents bg-[#F5F5F5] !flex items-center justify-center text-[#5E6366] hover:text-[#979797] hover: hover:bg-[#F5F5F5] focus:text-[#979797] focus:bg-[#F5F5F5] transition-all z-[999999]`}
      style={{ ...style }}
      onClick={onClick}
    >
      <FiArrowRight />
    </button>
  );
};

export default SingleMediaSliderNextArrow;
