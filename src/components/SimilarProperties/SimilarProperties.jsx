import Slider from "react-slick";
import { FiHeart, FiInfo } from "react-icons/fi";
import { GoStarFill } from "react-icons/go";
import { MdAccessTime } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";
import { PiBedLight } from "react-icons/pi";
import { BiBath } from "react-icons/bi";
import { TbZoomInArea } from "react-icons/tb";

import similarPropertiesImage1 from "../../assets/images/Similar Properties image 1.png";
import SimilarPropertiesSliderNextArrow from "./SimilarPropertiesSliderNextArrow";
import SimilarPropertiesSliderPrevArrow from "./SimilarPropertiesSliderPrevArrow";

const SimilarProperties = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
              <div className="bg-white rounded-[9px] shadow-[0px_4px_32px_0px_#3D467014] !w-[313px] h-[512px] !block mx-auto">
                <div className="relative mb-[22px]">
                  <img
                    src={similarPropertiesImage1}
                    alt="Similar properties image 1"
                    className="rounded-t-[9px]"
                  />

                  <div className="w-[34px] h-[34px] rounded-full text-[24px] text-primary bg-white flex items-center justify-center absolute top-[21px] left-[258px] cursor-pointer hover:bg-primary hover:text-white transition-all">
                    <FiHeart />
                  </div>
                </div>

                <div className="pb-7 pr-[12px] pl-[8px]">
                  <div className="border-b border-primary border-opacity-20 pb-4">
                    <div className="flex items-center justify-between gap-[14px] font-[500] text-[14px] mb-[9px]">
                      <h5 className="text-nowrap">
                        Cairo, Ain Shams near universities
                      </h5>
                      <div className="flex items-center justify-between">
                        <span className="text-star text-[20px] mr-1">
                          <GoStarFill />
                        </span>
                        <span className="mr-1">4.5</span>
                        <span className="font-[400] text-[12px] text-[#00000033]">
                          (88)
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-[9px]">
                      <div className="flex items-center justify-between">
                        <div className="text-textYellow opacity-70">
                          <MdAccessTime />
                        </div>

                        <p className="font-[400] text-[14px] opacity-50 ml-1">
                          Full Year
                        </p>
                      </div>
                      <div className="font-[400] text-[16px] text-nowrap">
                        <span className="text-primary">$120</span>
                        <span className="text-[#8B8D97]"> / month</span>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="text-textYellow opacity-70">
                        <FiInfo />
                      </div>
                      <p className="font-[400] text-[14px] opacity-50 ml-1">
                        Department .Bills Included
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-center gap-[16px] mt-4">
                      <div className="flex items-center gap-[3px] text-nowrap">
                        <div className="w-[20px] h-[20px] rounded-full text-textYellow bg-lightSecondary flex items-center justify-center font-bold">
                          <PiBedLight />
                        </div>
                        <p className="font-[500] text-[14px]">4 Beds</p>
                      </div>
                      <div className="flex items-center gap-[3px] text-nowrap">
                        <div className="w-[20px] h-[20px] rounded-full text-textYellow bg-lightSecondary flex items-center justify-center font-bold">
                          <BiBath />
                        </div>
                        <p className="font-[500] text-[14px]">1 Bathroom</p>
                      </div>
                      <div className="flex items-center gap-[3px] text-nowrap">
                        <div className="w-[20px] h-[20px] rounded-full text-textYellow bg-lightSecondary flex items-center justify-center font-bold">
                          <TbZoomInArea />
                        </div>
                        <p className="font-[500] text-[14px]">23 M</p>
                        <sup className="font-[500] text-[10px]">2</sup>
                      </div>
                    </div>

                    <div className="mt-4">
                      <button className="w-[192px] h-[52px] flex items-center justify-center rounded-[12px] py-[16px] px-[20px] bg-primary text-white border-[2px] border-transparent hover:bg-transparent hover:text-primary hover:border-[2px] hover:border-primary transition-all gap-[15px] mx-auto">
                        Check
                        <div>
                          <IoMdArrowForward />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-[9px] shadow-[0px_4px_32px_0px_#3D467014] !w-[313px] h-[512px] !block mx-auto">
                <div className="relative mb-[22px]">
                  <img
                    src={similarPropertiesImage1}
                    alt="Similar properties image 1"
                    className="rounded-t-[9px]"
                  />

                  <div className="w-[34px] h-[34px] rounded-full text-[24px] text-primary bg-white flex items-center justify-center absolute top-[21px] left-[258px] cursor-pointer hover:bg-primary hover:text-white transition-all">
                    <FiHeart />
                  </div>
                </div>

                <div className="pb-7 pr-[12px] pl-[8px]">
                  <div className="border-b border-primary border-opacity-20 pb-4">
                    <div className="flex items-center justify-between gap-[14px] font-[500] text-[14px] mb-[9px]">
                      <h5 className="text-nowrap">
                        Cairo, Ain Shams near universities
                      </h5>
                      <div className="flex items-center justify-between">
                        <span className="text-star text-[20px] mr-1">
                          <GoStarFill />
                        </span>
                        <span className="mr-1">4.5</span>
                        <span className="font-[400] text-[12px] text-[#00000033]">
                          (88)
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-[9px]">
                      <div className="flex items-center justify-between">
                        <div className="text-textYellow opacity-70">
                          <MdAccessTime />
                        </div>

                        <p className="font-[400] text-[14px] opacity-50 ml-1">
                          Full Year
                        </p>
                      </div>
                      <div className="font-[400] text-[16px] text-nowrap">
                        <span className="text-primary">$120</span>
                        <span className="text-[#8B8D97]"> / month</span>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="text-textYellow opacity-70">
                        <FiInfo />
                      </div>
                      <p className="font-[400] text-[14px] opacity-50 ml-1">
                        Department .Bills Included
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-center gap-[16px] mt-4">
                      <div className="flex items-center gap-[3px] text-nowrap">
                        <div className="w-[20px] h-[20px] rounded-full text-textYellow bg-lightSecondary flex items-center justify-center font-bold">
                          <PiBedLight />
                        </div>
                        <p className="font-[500] text-[14px]">4 Beds</p>
                      </div>
                      <div className="flex items-center gap-[3px] text-nowrap">
                        <div className="w-[20px] h-[20px] rounded-full text-textYellow bg-lightSecondary flex items-center justify-center font-bold">
                          <BiBath />
                        </div>
                        <p className="font-[500] text-[14px]">1 Bathroom</p>
                      </div>
                      <div className="flex items-center gap-[3px] text-nowrap">
                        <div className="w-[20px] h-[20px] rounded-full text-textYellow bg-lightSecondary flex items-center justify-center font-bold">
                          <TbZoomInArea />
                        </div>
                        <p className="font-[500] text-[14px]">23 M</p>
                        <sup className="font-[500] text-[10px]">2</sup>
                      </div>
                    </div>

                    <div className="mt-4">
                      <button className="w-[192px] h-[52px] flex items-center justify-center rounded-[12px] py-[16px] px-[20px] bg-primary text-white border-[2px] border-transparent hover:bg-transparent hover:text-primary hover:border-[2px] hover:border-primary transition-all gap-[15px] mx-auto">
                        Check
                        <div>
                          <IoMdArrowForward />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-[9px] shadow-[0px_4px_32px_0px_#3D467014] !w-[313px] h-[512px] !block mx-auto">
                <div className="relative mb-[22px]">
                  <img
                    src={similarPropertiesImage1}
                    alt="Similar properties image 1"
                    className="rounded-t-[9px]"
                  />

                  <div className="w-[34px] h-[34px] rounded-full text-[24px] text-primary bg-white flex items-center justify-center absolute top-[21px] left-[258px] cursor-pointer hover:bg-primary hover:text-white transition-all">
                    <FiHeart />
                  </div>
                </div>

                <div className="pb-7 pr-[12px] pl-[8px]">
                  <div className="border-b border-primary border-opacity-20 pb-4">
                    <div className="flex items-center justify-between gap-[14px] font-[500] text-[14px] mb-[9px]">
                      <h5 className="text-nowrap">
                        Cairo, Ain Shams near universities
                      </h5>
                      <div className="flex items-center justify-between">
                        <span className="text-star text-[20px] mr-1">
                          <GoStarFill />
                        </span>
                        <span className="mr-1">4.5</span>
                        <span className="font-[400] text-[12px] text-[#00000033]">
                          (88)
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-[9px]">
                      <div className="flex items-center justify-between">
                        <div className="text-textYellow opacity-70">
                          <MdAccessTime />
                        </div>

                        <p className="font-[400] text-[14px] opacity-50 ml-1">
                          Full Year
                        </p>
                      </div>
                      <div className="font-[400] text-[16px] text-nowrap">
                        <span className="text-primary">$120</span>
                        <span className="text-[#8B8D97]"> / month</span>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="text-textYellow opacity-70">
                        <FiInfo />
                      </div>
                      <p className="font-[400] text-[14px] opacity-50 ml-1">
                        Department .Bills Included
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-center gap-[16px] mt-4">
                      <div className="flex items-center gap-[3px] text-nowrap">
                        <div className="w-[20px] h-[20px] rounded-full text-textYellow bg-lightSecondary flex items-center justify-center font-bold">
                          <PiBedLight />
                        </div>
                        <p className="font-[500] text-[14px]">4 Beds</p>
                      </div>
                      <div className="flex items-center gap-[3px] text-nowrap">
                        <div className="w-[20px] h-[20px] rounded-full text-textYellow bg-lightSecondary flex items-center justify-center font-bold">
                          <BiBath />
                        </div>
                        <p className="font-[500] text-[14px]">1 Bathroom</p>
                      </div>
                      <div className="flex items-center gap-[3px] text-nowrap">
                        <div className="w-[20px] h-[20px] rounded-full text-textYellow bg-lightSecondary flex items-center justify-center font-bold">
                          <TbZoomInArea />
                        </div>
                        <p className="font-[500] text-[14px]">23 M</p>
                        <sup className="font-[500] text-[10px]">2</sup>
                      </div>
                    </div>

                    <div className="mt-4">
                      <button className="w-[192px] h-[52px] flex items-center justify-center rounded-[12px] py-[16px] px-[20px] bg-primary text-white border-[2px] border-transparent hover:bg-transparent hover:text-primary hover:border-[2px] hover:border-primary transition-all gap-[15px] mx-auto">
                        Check
                        <div>
                          <IoMdArrowForward />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-[9px] shadow-[0px_4px_32px_0px_#3D467014] !w-[313px] h-[512px] !block mx-auto">
                <div className="relative mb-[22px]">
                  <img
                    src={similarPropertiesImage1}
                    alt="Similar properties image 1"
                    className="rounded-t-[9px]"
                  />

                  <div className="w-[34px] h-[34px] rounded-full text-[24px] text-primary bg-white flex items-center justify-center absolute top-[21px] left-[258px] cursor-pointer hover:bg-primary hover:text-white transition-all">
                    <FiHeart />
                  </div>
                </div>

                <div className="pb-7 pr-[12px] pl-[8px]">
                  <div className="border-b border-primary border-opacity-20 pb-4">
                    <div className="flex items-center justify-between gap-[14px] font-[500] text-[14px] mb-[9px]">
                      <h5 className="text-nowrap">
                        Cairo, Ain Shams near universities
                      </h5>
                      <div className="flex items-center justify-between">
                        <span className="text-star text-[20px] mr-1">
                          <GoStarFill />
                        </span>
                        <span className="mr-1">4.5</span>
                        <span className="font-[400] text-[12px] text-[#00000033]">
                          (88)
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-[9px]">
                      <div className="flex items-center justify-between">
                        <div className="text-textYellow opacity-70">
                          <MdAccessTime />
                        </div>

                        <p className="font-[400] text-[14px] opacity-50 ml-1">
                          Full Year
                        </p>
                      </div>
                      <div className="font-[400] text-[16px] text-nowrap">
                        <span className="text-primary">$120</span>
                        <span className="text-[#8B8D97]"> / month</span>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="text-textYellow opacity-70">
                        <FiInfo />
                      </div>
                      <p className="font-[400] text-[14px] opacity-50 ml-1">
                        Department .Bills Included
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-center gap-[16px] mt-4">
                      <div className="flex items-center gap-[3px] text-nowrap">
                        <div className="w-[20px] h-[20px] rounded-full text-textYellow bg-lightSecondary flex items-center justify-center font-bold">
                          <PiBedLight />
                        </div>
                        <p className="font-[500] text-[14px]">4 Beds</p>
                      </div>
                      <div className="flex items-center gap-[3px] text-nowrap">
                        <div className="w-[20px] h-[20px] rounded-full text-textYellow bg-lightSecondary flex items-center justify-center font-bold">
                          <BiBath />
                        </div>
                        <p className="font-[500] text-[14px]">1 Bathroom</p>
                      </div>
                      <div className="flex items-center gap-[3px] text-nowrap">
                        <div className="w-[20px] h-[20px] rounded-full text-textYellow bg-lightSecondary flex items-center justify-center font-bold">
                          <TbZoomInArea />
                        </div>
                        <p className="font-[500] text-[14px]">23 M</p>
                        <sup className="font-[500] text-[10px]">2</sup>
                      </div>
                    </div>

                    <div className="mt-4">
                      <button className="w-[192px] h-[52px] flex items-center justify-center rounded-[12px] py-[16px] px-[20px] bg-primary text-white border-[2px] border-transparent hover:bg-transparent hover:text-primary hover:border-[2px] hover:border-primary transition-all gap-[15px] mx-auto">
                        Check
                        <div>
                          <IoMdArrowForward />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-[9px] shadow-[0px_4px_32px_0px_#3D467014] !w-[313px] h-[512px] !block mx-auto">
                <div className="relative mb-[22px]">
                  <img
                    src={similarPropertiesImage1}
                    alt="Similar properties image 1"
                    className="rounded-t-[9px]"
                  />

                  <div className="w-[34px] h-[34px] rounded-full text-[24px] text-primary bg-white flex items-center justify-center absolute top-[21px] left-[258px] cursor-pointer hover:bg-primary hover:text-white transition-all">
                    <FiHeart />
                  </div>
                </div>

                <div className="pb-7 pr-[12px] pl-[8px]">
                  <div className="border-b border-primary border-opacity-20 pb-4">
                    <div className="flex items-center justify-between gap-[14px] font-[500] text-[14px] mb-[9px]">
                      <h5 className="text-nowrap">
                        Cairo, Ain Shams near universities
                      </h5>
                      <div className="flex items-center justify-between">
                        <span className="text-star text-[20px] mr-1">
                          <GoStarFill />
                        </span>
                        <span className="mr-1">4.5</span>
                        <span className="font-[400] text-[12px] text-[#00000033]">
                          (88)
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-[9px]">
                      <div className="flex items-center justify-between">
                        <div className="text-textYellow opacity-70">
                          <MdAccessTime />
                        </div>

                        <p className="font-[400] text-[14px] opacity-50 ml-1">
                          Full Year
                        </p>
                      </div>
                      <div className="font-[400] text-[16px] text-nowrap">
                        <span className="text-primary">$120</span>
                        <span className="text-[#8B8D97]"> / month</span>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="text-textYellow opacity-70">
                        <FiInfo />
                      </div>
                      <p className="font-[400] text-[14px] opacity-50 ml-1">
                        Department .Bills Included
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-center gap-[16px] mt-4">
                      <div className="flex items-center gap-[3px] text-nowrap">
                        <div className="w-[20px] h-[20px] rounded-full text-textYellow bg-lightSecondary flex items-center justify-center font-bold">
                          <PiBedLight />
                        </div>
                        <p className="font-[500] text-[14px]">4 Beds</p>
                      </div>
                      <div className="flex items-center gap-[3px] text-nowrap">
                        <div className="w-[20px] h-[20px] rounded-full text-textYellow bg-lightSecondary flex items-center justify-center font-bold">
                          <BiBath />
                        </div>
                        <p className="font-[500] text-[14px]">1 Bathroom</p>
                      </div>
                      <div className="flex items-center gap-[3px] text-nowrap">
                        <div className="w-[20px] h-[20px] rounded-full text-textYellow bg-lightSecondary flex items-center justify-center font-bold">
                          <TbZoomInArea />
                        </div>
                        <p className="font-[500] text-[14px]">23 M</p>
                        <sup className="font-[500] text-[10px]">2</sup>
                      </div>
                    </div>

                    <div className="mt-4">
                      <button className="w-[192px] h-[52px] flex items-center justify-center rounded-[12px] py-[16px] px-[20px] bg-primary text-white border-[2px] border-transparent hover:bg-transparent hover:text-primary hover:border-[2px] hover:border-primary transition-all gap-[15px] mx-auto">
                        Check
                        <div>
                          <IoMdArrowForward />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-[9px] shadow-[0px_4px_32px_0px_#3D467014] !w-[313px] h-[512px] !block mx-auto">
                <div className="relative mb-[22px]">
                  <img
                    src={similarPropertiesImage1}
                    alt="Similar properties image 1"
                    className="rounded-t-[9px]"
                  />

                  <div className="w-[34px] h-[34px] rounded-full text-[24px] text-primary bg-white flex items-center justify-center absolute top-[21px] left-[258px] cursor-pointer hover:bg-primary hover:text-white transition-all">
                    <FiHeart />
                  </div>
                </div>

                <div className="pb-7 pr-[12px] pl-[8px]">
                  <div className="border-b border-primary border-opacity-20 pb-4">
                    <div className="flex items-center justify-between gap-[14px] font-[500] text-[14px] mb-[9px]">
                      <h5 className="text-nowrap">
                        Cairo, Ain Shams near universities
                      </h5>
                      <div className="flex items-center justify-between">
                        <span className="text-star text-[20px] mr-1">
                          <GoStarFill />
                        </span>
                        <span className="mr-1">4.5</span>
                        <span className="font-[400] text-[12px] text-[#00000033]">
                          (88)
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-[9px]">
                      <div className="flex items-center justify-between">
                        <div className="text-textYellow opacity-70">
                          <MdAccessTime />
                        </div>

                        <p className="font-[400] text-[14px] opacity-50 ml-1">
                          Full Year
                        </p>
                      </div>
                      <div className="font-[400] text-[16px] text-nowrap">
                        <span className="text-primary">$120</span>
                        <span className="text-[#8B8D97]"> / month</span>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="text-textYellow opacity-70">
                        <FiInfo />
                      </div>
                      <p className="font-[400] text-[14px] opacity-50 ml-1">
                        Department .Bills Included
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-center gap-[16px] mt-4">
                      <div className="flex items-center gap-[3px] text-nowrap">
                        <div className="w-[20px] h-[20px] rounded-full text-textYellow bg-lightSecondary flex items-center justify-center font-bold">
                          <PiBedLight />
                        </div>
                        <p className="font-[500] text-[14px]">4 Beds</p>
                      </div>
                      <div className="flex items-center gap-[3px] text-nowrap">
                        <div className="w-[20px] h-[20px] rounded-full text-textYellow bg-lightSecondary flex items-center justify-center font-bold">
                          <BiBath />
                        </div>
                        <p className="font-[500] text-[14px]">1 Bathroom</p>
                      </div>
                      <div className="flex items-center gap-[3px] text-nowrap">
                        <div className="w-[20px] h-[20px] rounded-full text-textYellow bg-lightSecondary flex items-center justify-center font-bold">
                          <TbZoomInArea />
                        </div>
                        <p className="font-[500] text-[14px]">23 M</p>
                        <sup className="font-[500] text-[10px]">2</sup>
                      </div>
                    </div>

                    <div className="mt-4">
                      <button className="w-[192px] h-[52px] flex items-center justify-center rounded-[12px] py-[16px] px-[20px] bg-primary text-white border-[2px] border-transparent hover:bg-transparent hover:text-primary hover:border-[2px] hover:border-primary transition-all gap-[15px] mx-auto">
                        Check
                        <div>
                          <IoMdArrowForward />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-[9px] shadow-[0px_4px_32px_0px_#3D467014] !w-[313px] h-[512px] !block mx-auto">
                <div className="relative mb-[22px]">
                  <img
                    src={similarPropertiesImage1}
                    alt="Similar properties image 1"
                    className="rounded-t-[9px]"
                  />

                  <div className="w-[34px] h-[34px] rounded-full text-[24px] text-primary bg-white flex items-center justify-center absolute top-[21px] left-[258px] cursor-pointer hover:bg-primary hover:text-white transition-all">
                    <FiHeart />
                  </div>
                </div>

                <div className="pb-7 pr-[12px] pl-[8px]">
                  <div className="border-b border-primary border-opacity-20 pb-4">
                    <div className="flex items-center justify-between gap-[14px] font-[500] text-[14px] mb-[9px]">
                      <h5 className="text-nowrap">
                        Cairo, Ain Shams near universities
                      </h5>
                      <div className="flex items-center justify-between">
                        <span className="text-star text-[20px] mr-1">
                          <GoStarFill />
                        </span>
                        <span className="mr-1">4.5</span>
                        <span className="font-[400] text-[12px] text-[#00000033]">
                          (88)
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-[9px]">
                      <div className="flex items-center justify-between">
                        <div className="text-textYellow opacity-70">
                          <MdAccessTime />
                        </div>

                        <p className="font-[400] text-[14px] opacity-50 ml-1">
                          Full Year
                        </p>
                      </div>
                      <div className="font-[400] text-[16px] text-nowrap">
                        <span className="text-primary">$120</span>
                        <span className="text-[#8B8D97]"> / month</span>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="text-textYellow opacity-70">
                        <FiInfo />
                      </div>
                      <p className="font-[400] text-[14px] opacity-50 ml-1">
                        Department .Bills Included
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-center gap-[16px] mt-4">
                      <div className="flex items-center gap-[3px] text-nowrap">
                        <div className="w-[20px] h-[20px] rounded-full text-textYellow bg-lightSecondary flex items-center justify-center font-bold">
                          <PiBedLight />
                        </div>
                        <p className="font-[500] text-[14px]">4 Beds</p>
                      </div>
                      <div className="flex items-center gap-[3px] text-nowrap">
                        <div className="w-[20px] h-[20px] rounded-full text-textYellow bg-lightSecondary flex items-center justify-center font-bold">
                          <BiBath />
                        </div>
                        <p className="font-[500] text-[14px]">1 Bathroom</p>
                      </div>
                      <div className="flex items-center gap-[3px] text-nowrap">
                        <div className="w-[20px] h-[20px] rounded-full text-textYellow bg-lightSecondary flex items-center justify-center font-bold">
                          <TbZoomInArea />
                        </div>
                        <p className="font-[500] text-[14px]">23 M</p>
                        <sup className="font-[500] text-[10px]">2</sup>
                      </div>
                    </div>

                    <div className="mt-4">
                      <button className="w-[192px] h-[52px] flex items-center justify-center rounded-[12px] py-[16px] px-[20px] bg-primary text-white border-[2px] border-transparent hover:bg-transparent hover:text-primary hover:border-[2px] hover:border-primary transition-all gap-[15px] mx-auto">
                        Check
                        <div>
                          <IoMdArrowForward />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-[9px] shadow-[0px_4px_32px_0px_#3D467014] !w-[313px] h-[512px] !block mx-auto">
                <div className="relative mb-[22px]">
                  <img
                    src={similarPropertiesImage1}
                    alt="Similar properties image 1"
                    className="rounded-t-[9px]"
                  />

                  <div className="w-[34px] h-[34px] rounded-full text-[24px] text-primary bg-white flex items-center justify-center absolute top-[21px] left-[258px] cursor-pointer hover:bg-primary hover:text-white transition-all">
                    <FiHeart />
                  </div>
                </div>

                <div className="pb-7 pr-[12px] pl-[8px]">
                  <div className="border-b border-primary border-opacity-20 pb-4">
                    <div className="flex items-center justify-between gap-[14px] font-[500] text-[14px] mb-[9px]">
                      <h5 className="text-nowrap">
                        Cairo, Ain Shams near universities
                      </h5>
                      <div className="flex items-center justify-between">
                        <span className="text-star text-[20px] mr-1">
                          <GoStarFill />
                        </span>
                        <span className="mr-1">4.5</span>
                        <span className="font-[400] text-[12px] text-[#00000033]">
                          (88)
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-[9px]">
                      <div className="flex items-center justify-between">
                        <div className="text-textYellow opacity-70">
                          <MdAccessTime />
                        </div>

                        <p className="font-[400] text-[14px] opacity-50 ml-1">
                          Full Year
                        </p>
                      </div>
                      <div className="font-[400] text-[16px] text-nowrap">
                        <span className="text-primary">$120</span>
                        <span className="text-[#8B8D97]"> / month</span>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="text-textYellow opacity-70">
                        <FiInfo />
                      </div>
                      <p className="font-[400] text-[14px] opacity-50 ml-1">
                        Department .Bills Included
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-center gap-[16px] mt-4">
                      <div className="flex items-center gap-[3px] text-nowrap">
                        <div className="w-[20px] h-[20px] rounded-full text-textYellow bg-lightSecondary flex items-center justify-center font-bold">
                          <PiBedLight />
                        </div>
                        <p className="font-[500] text-[14px]">4 Beds</p>
                      </div>
                      <div className="flex items-center gap-[3px] text-nowrap">
                        <div className="w-[20px] h-[20px] rounded-full text-textYellow bg-lightSecondary flex items-center justify-center font-bold">
                          <BiBath />
                        </div>
                        <p className="font-[500] text-[14px]">1 Bathroom</p>
                      </div>
                      <div className="flex items-center gap-[3px] text-nowrap">
                        <div className="w-[20px] h-[20px] rounded-full text-textYellow bg-lightSecondary flex items-center justify-center font-bold">
                          <TbZoomInArea />
                        </div>
                        <p className="font-[500] text-[14px]">23 M</p>
                        <sup className="font-[500] text-[10px]">2</sup>
                      </div>
                    </div>

                    <div className="mt-4">
                      <button className="w-[192px] h-[52px] flex items-center justify-center rounded-[12px] py-[16px] px-[20px] bg-primary text-white border-[2px] border-transparent hover:bg-transparent hover:text-primary hover:border-[2px] hover:border-primary transition-all gap-[15px] mx-auto">
                        Check
                        <div>
                          <IoMdArrowForward />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimilarProperties;
