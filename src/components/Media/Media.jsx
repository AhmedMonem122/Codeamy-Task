import { FiMapPin, FiShare2, FiHeart, FiCamera } from "react-icons/fi";
import mediaPhoto1 from "../../assets/images/media-1.png";
import mediaPhoto2 from "../../assets/images/media-2.png";
import mediaPhoto3 from "../../assets/images/media-3.png";
import { useState } from "react";

const Media = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <section>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center font-[400] gap-[10px]">
            <button
              className={`flex items-center justify-center ${
                isSelected
                  ? "bg-white text-primary"
                  : " bg-primary text-white z-10"
              } w-[82px] h-[36px] sm:w-[116px] sm:h-[41px] rounded-[12px] py-[17px] pr-[16px] pl-[14px] sm:pl-[2px] text-[14px] sm:text-[16px] transition-all duration-300`}
              onClick={() => setIsSelected(false)}
            >
              <div className="text-[16px] sm:text-[24px] mr-1 sm:mr-3">
                <FiCamera />
              </div>
              Media
            </button>

            <button
              className={`flex items-center justify-center ${
                isSelected
                  ? "bg-primary text-white z-20"
                  : " bg-white text-primary"
              } w-[87px] h-[36px] sm:w-[116px] sm:h-[41px] rounded-[12px] py-[17px] pr-[16px] pl-[2px] -ml-4 relative text-[14px] sm:text-[16px] transition-all duration-300`}
              onClick={() => setIsSelected(true)}
            >
              <div className="text-[16px] sm:text-[24px] mr-1 sm:mr-3">
                <FiMapPin />
              </div>
              Map
            </button>
          </div>

          <div className="flex items-center justify-center">
            <button className="sm:hidden w-[32px] h-[32px] sm:w-[56px] sm:h-[56px] rounded-full sm:p-4 bg-secondary text-white cursor-pointer flex items-center justify-center text-[20px] sm:text-[24px] hover:bg-transparent hover:text-secondary transition-all mr-1">
              <FiShare2 />
            </button>

            <button className="w-[32px] h-[32px] sm:w-[56px] sm:h-[56px] rounded-full sm:p-4 bg-primary text-white cursor-pointer flex items-center justify-center text-[20px] sm:text-[24px] hover:bg-transparent hover:text-primary transition-all">
              <FiHeart />
            </button>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-[16px] md:gap-[19px]">
          <div className="cursor-pointer relative group">
            <img
              src={mediaPhoto1}
              alt="media photo 1"
              className="w-full h-full"
            />

            <div className="absolute top-0 left-0 w-0 h-full overflow-hidden bg-[rgba(0,0,0,.5)] flex items-center justify-center text-white font-[400] text-[16px] md:text-[48px] transition-all group-hover:w-full">
              +4
            </div>
          </div>
          <div className="cursor-pointer relative group">
            <img
              src={mediaPhoto2}
              alt="media photo 2"
              className="w-full h-full"
            />

            <div className="absolute top-0 left-0 w-0 h-full overflow-hidden bg-[rgba(0,0,0,.5)] flex items-center justify-center text-white font-[400] text-[16px] md:text-[48px] transition-all group-hover:w-full">
              +4
            </div>
          </div>
          <div className="cursor-pointer relative group">
            <img
              src={mediaPhoto3}
              alt="media photo 3"
              className="w-full h-full"
            />

            <div className="absolute top-0 left-0 w-0 h-full overflow-hidden bg-[rgba(0,0,0,.5)] flex items-center justify-center text-white font-[400] text-[16px] md:text-[48px] transition-all group-hover:w-full">
              +4
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;
