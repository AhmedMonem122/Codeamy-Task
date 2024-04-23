import Slider from "react-slick";
import { FiX } from "react-icons/fi";
import SingleMediaSliderNextArrow from "./SingleMediaSliderNextArrow";
import SingleMediaSliderPrevArrow from "./SingleMediaSliderPrevArrow";

const SingleMediaSlider = ({ media, mediaId, handleCloseModalSlider }) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: mediaId - 1,
    nextArrow: <SingleMediaSliderNextArrow />,
    prevArrow: <SingleMediaSliderPrevArrow />,
  };

  return (
    <div className="w-full h-screen bg-[#130F2666] fixed top-0 left-0 z-[5000]">
      <Slider {...settings} className="h-full flex items-center justify-center">
        {media.map((singleMedia) => {
          const { id, mediaPhoto, imgAlt } = singleMedia;

          return (
            <div
              className="relative !flex items-center justify-center !w-[291px] h-[205px] sm:!w-[385px] sm:h-[348px] md:!w-[500px] md:h-[450px] xl:!w-[685px] xl:h-[620px] mx-auto"
              key={id}
            >
              <button
                className="w-[27px] h-[24px] text-[20px] sm:w-[34px] sm:h-[34px] absolute top-[3%] right-[3%] bg-white sm:text-[24px] rounded-full text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                onClick={handleCloseModalSlider}
              >
                <FiX />
              </button>

              <img
                src={mediaPhoto}
                alt={imgAlt}
                className="w-full h-full rounded-[6px] sm:rounded-[12px]"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SingleMediaSlider;
