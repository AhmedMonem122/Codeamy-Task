const Amenities = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col content-start flex-wrap gap-[8px] sm:gap-[12px] mt-5">
          <h2 className="font-[500] text-[20px] sm:text-[28px] text-lightBlack">
            Amenities
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-[10px] text-center text-nowrap">
            <p className="rounded-[4px] py-[4px] px-[8px] bg-lightPrimary text-primary font-[500] text-[14px]">
              Air Conditioning
            </p>
            <p className="rounded-[4px] py-[4px] px-[8px] bg-lightPrimary text-primary font-[500] text-[14px]">
              Electricity
            </p>
            <p className="rounded-[4px] py-[4px] px-[8px] bg-lightPrimary text-primary font-[500] text-[14px]">
              Balacony
            </p>
            <p className="rounded-[4px] py-[4px] px-[8px] bg-lightPrimary text-primary font-[500] text-[14px]">
              Heating
            </p>
            <p className="rounded-[4px] py-[4px] px-[8px] bg-lightPrimary text-primary font-[500] text-[14px]">
              Heating
            </p>
            <p className="rounded-[4px] py-[4px] px-[8px] bg-lightPrimary text-primary font-[500] text-[14px]">
              Wifi
            </p>
            <p className="rounded-[4px] py-[4px] px-[8px] bg-lightPrimary text-primary font-[500] text-[14px]">
              Smart Tv
            </p>
            <p className="rounded-[4px] py-[4px] px-[8px] bg-lightPrimary text-primary font-[500] text-[14px]">
              Kitchen
            </p>
            <p className="rounded-[4px] py-[4px] px-[8px] bg-lightPrimary text-primary font-[500] text-[14px]">
              Elevator
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
