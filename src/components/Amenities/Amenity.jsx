const Amenity = ({ amenityText }) => {
  return (
    <p className="rounded-[4px] py-[4px] px-[8px] bg-lightPrimary text-primary font-[500] text-[14px]">
      {amenityText}
    </p>
  );
};

export default Amenity;
