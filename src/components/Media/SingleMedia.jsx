import { Fragment, useState } from "react";
import SingleMediaSlider from "./SingleMediaSlider";

const SingleMedia = ({ id, mediaPhoto, imgAlt, mediaText, media }) => {
  const [isModalSlider, setIsModalSlider] = useState(false);

  const handleCloseModalSlider = () => {
    setIsModalSlider(false);
  };

  return (
    <Fragment>
      <div
        className="cursor-pointer relative group"
        onClick={() => setIsModalSlider(true)}
      >
        <img src={mediaPhoto} alt={imgAlt} className="w-full h-full" />

        <div className="absolute top-0 left-0 w-0 h-full overflow-hidden bg-[rgba(0,0,0,.5)] flex items-center justify-center text-white font-[400] text-[16px] md:text-[48px] transition-all group-hover:w-full">
          {mediaText}
        </div>
      </div>

      {isModalSlider && (
        <SingleMediaSlider
          media={media}
          mediaId={id}
          handleCloseModalSlider={handleCloseModalSlider}
        />
      )}
    </Fragment>
  );
};

export default SingleMedia;
