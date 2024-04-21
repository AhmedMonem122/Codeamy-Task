import { FiArrowLeft } from "react-icons/fi";

const SimilarPropertiesSliderPrevArrow = ({ className, style, onClick }) => {
  return (
    <button
      className={`${className} w-[46px] h-[46px] right-1/2 left-auto top-[110%] text-[24px] rounded-full before:contents bg-[#F5F5F5] !flex items-center justify-center text-black hover:text-[#979797] hover:bg-[#F5F5F5] focus:text-[#979797] focus:bg-[#F5F5F5] transition-all mr-[8px]`}
      style={{ ...style }}
      onClick={onClick}
    >
      <FiArrowLeft />
    </button>
  );
};

export default SimilarPropertiesSliderPrevArrow;
