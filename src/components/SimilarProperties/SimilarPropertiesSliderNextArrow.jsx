import { FiArrowRight } from "react-icons/fi";

const SimilarPropertiesSliderNextArrow = ({ className, style, onClick }) => {
  return (
    <button
      className={`${className} w-[46px] h-[46px] left-1/2 right-auto top-[110%] text-[24px] rounded-full before:contents bg-[#F5F5F5] !flex items-center justify-center text-black hover:text-[#979797] hover: hover:bg-[#F5F5F5] focus:text-[#979797] focus:bg-[#F5F5F5] transition-all`}
      style={{ ...style }}
      onClick={onClick}
    >
      <FiArrowRight />
    </button>
  );
};

export default SimilarPropertiesSliderNextArrow;
