import { FiMapPin, FiShare2, FiHeart, FiCamera } from "react-icons/fi";

import { useState } from "react";
import content from "../../content/content";
import SingleMedia from "./SingleMedia";

const Media = () => {
  const [media, setMedia] = useState(content.mediaContent);
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
          {media.map((singleMedia) => {
            return (
              <SingleMedia
                key={singleMedia.id}
                {...singleMedia}
                media={media}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Media;
