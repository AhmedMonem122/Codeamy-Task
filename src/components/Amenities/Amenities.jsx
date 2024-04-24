import { useState } from "react";
import content from "../../content/content";
import Amenity from "./Amenity";

const Amenities = () => {
  const [amenities, setAmenities] = useState(content.amenitiesContent);

  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col content-start flex-wrap gap-[8px] sm:gap-[12px] mt-5">
          <h2 className="font-[500] text-[20px] sm:text-[28px] text-lightBlack">
            Amenities
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-[10px] text-center text-nowrap">
            {amenities.map((amenity) => {
              const { amenityText } = amenity;

              return <Amenity key={amenity.id} amenityText={amenityText} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
