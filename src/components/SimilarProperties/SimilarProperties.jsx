import Slider from "react-slick";

import SimilarPropertiesSliderNextArrow from "./SimilarPropertiesSliderNextArrow";
import SimilarPropertiesSliderPrevArrow from "./SimilarPropertiesSliderPrevArrow";
import { useState } from "react";
import content from "../../content/content";
import SimilarPropertySliderItem from "./SimilarPropertySliderItem";

const SimilarProperties = () => {
  const [similarProperties, setSimilarProperties] = useState(
    content.similarPropertiesContent
  );

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SimilarPropertiesSliderNextArrow />,
    prevArrow: <SimilarPropertiesSliderPrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <div className="container mx-auto">
        <div className="mt-10 sm:mt-16">
          <div className="flex items-center justify-center sm:justify-normal mr-12 sm:mr-0">
            <div className="w-[34.94px] sm:w-[41px] h-[37px] bg-[#F6D79D] rounded-full opacity-[34%] mr-3 sm:mr-0"></div>
            <h3 className="font-[500] text-[20px] sm:text-[28px] text-primary rotate-[0.32deg] sm:rotate-[0.27deg]">
              Similar Properties
            </h3>
          </div>
          <div className="mt-[22px]">
            <Slider {...settings}>
              {similarProperties.map((similarProperty) => {
                return (
                  <SimilarPropertySliderItem
                    key={similarProperty.id}
                    {...similarProperty}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimilarProperties;
