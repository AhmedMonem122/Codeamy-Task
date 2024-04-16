import { AiOutlineCamera } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";

const Media = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center font-[400] gap-[10px]">
            <button className="flex items-center justify-center bg-primary text-white w-[82px] h-[36px] sm:w-[116px] sm:h-[41px] rounded-[12px] py-[17px] pr-[16px] pl-[14px] sm:pl-[2px] text-[14px] sm:text-[16px]">
              <div className="text-[16px] sm:text-[24px] mr-1 sm:mr-3">
                <AiOutlineCamera />
              </div>
              Media
            </button>

            <button className="flex items-center justify-center bg-white text-primary w-[87px] h-[36px] sm:w-[116px] sm:h-[41px] rounded-[12px] py-[17px] pr-[16px] pl-[2px] -ml-4 relative -z-10 text-[14px] sm:text-[16px]">
              <div className="text-[16px] sm:text-[24px] mr-1 sm:mr-3">
                <FiMapPin />
              </div>
              Map
            </button>
          </div>

          <button className="w-[32px] h-[32px] sm:w-[56px] sm:h-[56px] rounded-full sm:p-4 bg-primary text-white cursor-pointer flex items-center justify-center text-[20px] sm:text-[24px] hover:bg-transparent hover:text-primary transition-all">
            <FaRegHeart />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Media;
