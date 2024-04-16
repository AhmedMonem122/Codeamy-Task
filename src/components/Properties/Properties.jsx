import { FiShare2 } from "react-icons/fi";
import { GoStarFill } from "react-icons/go";
import { PiBedLight } from "react-icons/pi";
import { BiBath } from "react-icons/bi";
import { TbZoomInArea } from "react-icons/tb";

const Properties = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="mt-8 flex items-start sm:items-center justify-between relative">
          <div className="sm:h-[500px] w-3/5 sm:w-full">
            <div className="flex items-center">
              <h2 className="font-[500] text-[20px] sm:text-[28px] text-lightBlack">
                Cairo, Ain Shams near universities
              </h2>
              <button className="hidden w-[32px] h-[32px] sm:w-[56px] sm:h-[56px] rounded-full sm:p-4 bg-secondary text-white cursor-pointer sm:flex items-center justify-center text-[20px] sm:text-[24px] hover:bg-transparent hover:text-secondary transition-all ml-4">
                <FiShare2 />
              </button>
            </div>

            <div className="flex items-center">
              <div className="flex items-center justify-between">
                <span className="mr-px cursor-pointer text-[18px] text-star">
                  <GoStarFill />
                </span>
                <span className="mr-px cursor-pointer text-[18px] text-star">
                  <GoStarFill />
                </span>
                <span className="mr-px cursor-pointer text-[18px] text-star">
                  <GoStarFill />
                </span>
                <span className="mr-px cursor-pointer text-[18px] text-star">
                  <GoStarFill />
                </span>

                <span className="ml-1 font-[400] text-[14px] text-[#666666] text-nowrap">
                  4 Review
                </span>
              </div>
              <div className="ml-4 font-[400] text-[16px] text-[#666666] flex items-center text-nowrap">
                <span>Listed By</span>
                <a href="" className="text-[#5570F1] underline ml-1">
                  Ahmed Ali
                </a>
              </div>
            </div>

            <div className="flex items-center gap-[14px] mt-1 text-nowrap">
              <p className="rounded-[4px] py-[4px] px-[8px] bg-lightPrimary text-primary font-[500] text-[14px]">
                Studio
              </p>
              <p className="rounded-[4px] py-[4px] px-[8px] bg-lightPrimary text-primary font-[500] text-[14px]">
                Full year
              </p>
              <p className="rounded-[4px] py-[4px] px-[8px] bg-lightDanger text-danger font-[500] text-[14px]">
                Bills included
              </p>
            </div>

            <div className="flex items-center gap-[22px] mt-4">
              <div className="flex items-center gap-[3px] text-nowrap">
                <div className="w-[32px] h-[32px] rounded-full text-textYellow bg-lightSecondary flex items-center justify-center font-bold">
                  <PiBedLight />
                </div>
                <p className="font-[500] text-[14px] sm:text-[16px]">4 Beds</p>
              </div>
              <div className="flex items-center gap-[3px] text-nowrap">
                <div className="w-[32px] h-[32px] rounded-full text-textYellow bg-lightSecondary flex items-center justify-center font-bold">
                  <BiBath />
                </div>
                <p className="font-[500] text-[14px] sm:text-[16px]">
                  1 Bathroom
                </p>
              </div>
              <div className="flex items-center gap-[3px] text-nowrap">
                <div className="w-[32px] h-[32px] rounded-full text-textYellow bg-lightSecondary flex items-center justify-center font-bold">
                  <TbZoomInArea />
                </div>
                <p className="font-[500] text-[14px] sm:text-[16px]">23 M</p>
                <sup className="font-[500] text-[14px] sm:text-[10px]">2</sup>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col gap-[42px]">
            <div className="font-[700] text-[20px] sm:text-[32px] text-nowrap">
              <span className="text-primary">$120</span>
              <span className="text-[#8B8D97]"> / month</span>
            </div>

            <div className="hidden sm:flex items-center justify-center flex-col gap-[18px] font-[600] text-[16px]">
              <button className="w-[198px] h-[50px] flex items-center justify-center rounded-[12px] py-[17px] px-[16px] bg-primary text-white border-[2px] border-transparent hover:bg-transparent hover:text-primary hover:border-[2px] hover:border-primary transition-all">
                Request a tour
              </button>
              <button className="w-[198px] h-[50px] flex items-center justify-center rounded-[12px] py-[17px] px-[16px] bg-transparent text-secondary border-[2px] border-secondary hover:bg-secondary hover:text-white hover:border-[2px] hover:border-transparent transition-all">
                Book Now
              </button>
            </div>
          </div>

          <div className="hidden lg:block absolute left-3/4 -translate-x-3/4 top-[30%] w-[3px] h-full bg-[#00000030]"></div>
        </div>
      </div>

      <div className="flex sm:hidden items-center justify-center gap-[9px] font-[600] text-[16px] mt-5">
        <button className="w-[159px] h-[50px] flex items-center justify-center rounded-[12px] py-[17px] px-[16px] bg-primary text-white border-[2px] border-transparent hover:bg-transparent hover:text-primary hover:border-[2px] hover:border-primary transition-all">
          Request a tour
        </button>
        <button className="w-[134px] h-[50px] flex items-center justify-center rounded-[12px] py-[17px] px-[16px] bg-transparent text-secondary border-[2px] border-secondary hover:bg-secondary hover:text-white hover:border-[2px] hover:border-transparent transition-all">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default Properties;
