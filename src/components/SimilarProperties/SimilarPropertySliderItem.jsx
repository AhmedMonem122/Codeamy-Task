import { FiHeart, FiInfo } from "react-icons/fi";
import { GoStarFill } from "react-icons/go";
import { MdAccessTime } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";

const SimilarPropertySliderItem = ({
  similarPropertiesImage,
  similarPropertiesImageAlt,
  similarPropertiesHeadingText,
  similarPropertiesRating,
  similarPropertiesRatingCount,
  similarPropertiesYear,
  similarPropertiesCost,
  similarPropertiesDepartmentBills,
  similarPropertiesAdvantages,
}) => {
  return (
    <div className="bg-white rounded-[9px] shadow-[0px_4px_32px_0px_#3D467014] !w-[313px] h-[512px] !block mx-auto">
      <div className="relative mb-[22px]">
        <img
          src={similarPropertiesImage}
          alt={similarPropertiesImageAlt}
          className="rounded-t-[9px]"
        />

        <div className="w-[34px] h-[34px] rounded-full text-[24px] text-primary bg-white flex items-center justify-center absolute top-[21px] left-[258px] cursor-pointer hover:bg-primary hover:text-white transition-all">
          <FiHeart />
        </div>
      </div>

      <div className="pb-7 pr-[12px] pl-[8px]">
        <div className="border-b border-primary border-opacity-20 pb-4">
          <div className="flex items-center justify-between gap-[14px] font-[500] text-[14px] mb-[9px]">
            <h5 className="text-nowrap">{similarPropertiesHeadingText}</h5>
            <div className="flex items-center justify-between">
              <span className="text-star text-[20px] mr-1">
                <GoStarFill />
              </span>
              <span className="mr-1">{similarPropertiesRating}</span>
              <span className="font-[400] text-[12px] text-[#00000033]">
                ({similarPropertiesRatingCount})
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between mb-[9px]">
            <div className="flex items-center justify-between">
              <div className="text-textYellow opacity-70">
                <MdAccessTime />
              </div>

              <p className="font-[400] text-[14px] opacity-50 ml-1">
                {similarPropertiesYear}
              </p>
            </div>
            <div className="font-[400] text-[16px] text-nowrap">
              <span className="text-primary">${similarPropertiesCost}</span>
              <span className="text-[#8B8D97]"> / month</span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="text-textYellow opacity-70">
              <FiInfo />
            </div>
            <p className="font-[400] text-[14px] opacity-50 ml-1">
              {similarPropertiesDepartmentBills}
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-center gap-[16px] mt-4">
            {similarPropertiesAdvantages.map(
              (similarPropertyAdvantage, index) => {
                const {
                  id,
                  SimilarPropertiesAdvantageIcon,
                  similarPropertiesAdvantageText,
                } = similarPropertyAdvantage;

                if (index === similarPropertiesAdvantages.length - 1) {
                  return (
                    <div
                      className="flex items-center gap-[3px] text-nowrap"
                      key={id}
                    >
                      <div className="w-[20px] h-[20px] rounded-full text-textYellow bg-lightSecondary flex items-center justify-center font-bold">
                        <SimilarPropertiesAdvantageIcon />
                      </div>
                      <p className="font-[500] text-[14px]">
                        {similarPropertiesAdvantageText}
                      </p>
                      <sup className="font-[500] text-[10px]">2</sup>
                    </div>
                  );
                }

                return (
                  <div
                    className="flex items-center gap-[3px] text-nowrap"
                    key={id}
                  >
                    <div className="w-[20px] h-[20px] rounded-full text-textYellow bg-lightSecondary flex items-center justify-center font-bold">
                      <SimilarPropertiesAdvantageIcon />
                    </div>
                    <p className="font-[500] text-[14px]">
                      {similarPropertiesAdvantageText}
                    </p>
                  </div>
                );
              }
            )}
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
  );
};

export default SimilarPropertySliderItem;
