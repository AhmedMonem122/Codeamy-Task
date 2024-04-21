import { MdOutlineFastfood, MdEmojiTransportation } from "react-icons/md";

const Facilities = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="mt-4 flex flex-col content-start flex-wrap">
          <div className="font-[500] text-[14px] sm:text-[16px] flex items-center text-nowrap gap-[20px]">
            <h2 className="font-[500] text-[20px] sm:text-[28px] text-lightBlack">
              Facilities
            </h2>
            <a href="" className="text-[#6A6CD1] underline">
              See On Map
            </a>
          </div>
          <div className="mt-[9px] flex items-center text-nowrap">
            <div className="rounded-[3px] py-[4px] px-[6px] sm:px-[10px] bg-[#130F260D] text-[#2C2D33] font-[500] text-[14px] flex items-center justify-center gap-[4px] sm:gap-[11px]">
              <div className="text-[22px] text-secondary">
                <MdOutlineFastfood />
              </div>
              <p>Nearby Restaurants</p>
            </div>
            <div className="rounded-[3px] py-[4px] px-[6px] sm:px-[10px] text-[#53545C] font-[500] text-[14px] flex items-center justify-center gap-[3px] sm:gap-[11px]">
              <div className="text-[22px] text-secondary">
                <MdEmojiTransportation />
              </div>
              <p>Public Transportations</p>
            </div>
          </div>
          <div className="p-[10px] rounded-[8px]">
            <ul className="grid grid-cols-3 gap-[9px] sm:gap-[10px] font-[500] text-[14px] list-disc pl-[40px]">
              <li>Holmes</li>
              <li>KFC</li>
              <li>Homes</li>
              <li>Homes</li>
              <li>Homes</li>
              <li>Homes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
