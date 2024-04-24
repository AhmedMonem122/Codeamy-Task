import mediaPhoto1 from "../assets/images/media-1.png";
import mediaPhoto2 from "../assets/images/media-2.png";
import mediaPhoto3 from "../assets/images/media-3-lg.png";
import reviewImage from "../assets/images/Review Image.png";
import similarPropertiesImage1 from "../assets/images/Similar Properties image 1.png";
import similarPropertiesImage2 from "../assets/images/Similar Properties image 2.png";
import similarPropertiesImage3 from "../assets/images/Similar Properties image 3.png";
import similarPropertiesImage4 from "../assets/images/Similar Properties image 4.png";
import { PiBedLight } from "react-icons/pi";
import { BiBath } from "react-icons/bi";
import { TbZoomInArea } from "react-icons/tb";

const content = {
  mediaContent: [
    {
      id: 1,
      mediaPhoto: mediaPhoto1,
      imgAlt: "media photo 1",
      mediaText: "+4",
    },
    {
      id: 2,
      mediaPhoto: mediaPhoto2,
      imgAlt: "media photo 2",
      mediaText: "+4",
    },
    {
      id: 3,
      mediaPhoto: mediaPhoto3,
      imgAlt: "media photo 3",
      mediaText: "+4",
    },
  ],
  amenitiesContent: [
    {
      id: 1,
      amenityText: "Air Conditioning",
    },
    {
      id: 2,
      amenityText: "Electricity",
    },
    {
      id: 3,
      amenityText: "Balacony",
    },
    {
      id: 4,
      amenityText: "Heating",
    },
    {
      id: 5,
      amenityText: "Heating",
    },
    {
      id: 6,
      amenityText: "Wifi",
    },
    {
      id: 7,
      amenityText: "Smart Tv",
    },
    {
      id: 8,
      amenityText: "Kitchen",
    },
    {
      id: 9,
      amenityText: "Elevator",
    },
  ],
  facilitiesContent: [
    {
      id: 1,
      facilityText: "Holmes",
    },
    {
      id: 2,
      facilityText: "KFC",
    },
    {
      id: 3,
      facilityText: "Homes",
    },
    {
      id: 4,
      facilityText: "Homes",
    },
    {
      id: 5,
      facilityText: "Homes",
    },
    {
      id: 6,
      facilityText: "Homes",
    },
  ],
  reviewsContent: [
    {
      id: 1,
      reviewImage,
      reviewName: "Kristin Watson",
      reviewText: "Duis at ullamcorper nulla, eu dictum eros.",
      reviewPostedTime: "2 min ago",
    },
    {
      id: 2,
      reviewImage,
      reviewName: "Kristin Watson",
      reviewText:
        'Keep the soil evenly moist for the healthiest growth. If the sun gets too hot, Chinese cabbage tends to "bolt" or go to seed; in long periods of heat, some kind of shade may be helpful. Watch out for snails, as they will harm the plants.',
      reviewPostedTime: "2 min ago",
    },
    {
      id: 3,
      reviewImage,
      reviewName: "Kristin Watson",
      reviewText:
        "Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia lacus.",
      reviewPostedTime: "2 min ago",
    },
    {
      id: 4,
      reviewImage,
      reviewName: "Kristin Watson",
      reviewText:
        "200+ Canton Pak Choi Bok Choy Chinese Cabbage Seeds Heirloom Non-GMO Productive Brassica rapa VAR. chinensis, a.k.a. Canton's Choice, Bok Choi, from USA",
      reviewPostedTime: "2 min ago",
    },
  ],
  similarPropertiesContent: [
    {
      id: 1,
      similarPropertiesImage: similarPropertiesImage1,
      similarPropertiesImageAlt: "Similar properties image 1",
      similarPropertiesHeadingText: "Cairo, Ain Shams near universities",
      similarPropertiesRating: 4.5,
      similarPropertiesRatingCount: 88,
      similarPropertiesYear: "Full Year",
      similarPropertiesCost: 120,
      similarPropertiesDepartmentBills: "Department .Bills Included",
      similarPropertiesAdvantages: [
        {
          id: 1,
          SimilarPropertiesAdvantageIcon: PiBedLight,
          similarPropertiesAdvantageText: "4 Beds",
        },
        {
          id: 2,
          SimilarPropertiesAdvantageIcon: BiBath,
          similarPropertiesAdvantageText: "1 Bathroom",
        },
        {
          id: 3,
          SimilarPropertiesAdvantageIcon: TbZoomInArea,
          similarPropertiesAdvantageText: "23 M",
        },
      ],
    },
    {
      id: 2,
      similarPropertiesImage: similarPropertiesImage2,
      similarPropertiesImageAlt: "Similar properties image 2",
      similarPropertiesHeadingText: "Cairo, Ain Shams near universities",
      similarPropertiesRating: 4.5,
      similarPropertiesRatingCount: 88,
      similarPropertiesYear: "Full Year",
      similarPropertiesCost: 120,
      similarPropertiesDepartmentBills: "Department .Bills Included",
      similarPropertiesAdvantages: [
        {
          id: 1,
          SimilarPropertiesAdvantageIcon: PiBedLight,
          similarPropertiesAdvantageText: "4 Beds",
        },
        {
          id: 2,
          SimilarPropertiesAdvantageIcon: BiBath,
          similarPropertiesAdvantageText: "1 Bathroom",
        },
        {
          id: 3,
          SimilarPropertiesAdvantageIcon: TbZoomInArea,
          similarPropertiesAdvantageText: "23 M",
        },
      ],
    },
    {
      id: 3,
      similarPropertiesImage: similarPropertiesImage3,
      similarPropertiesImageAlt: "Similar properties image 3",
      similarPropertiesHeadingText: "Cairo, Ain Shams near universities",
      similarPropertiesRating: 4.5,
      similarPropertiesRatingCount: 88,
      similarPropertiesYear: "Full Year",
      similarPropertiesCost: 120,
      similarPropertiesDepartmentBills: "Department .Bills Included",
      similarPropertiesAdvantages: [
        {
          id: 1,
          SimilarPropertiesAdvantageIcon: PiBedLight,
          similarPropertiesAdvantageText: "4 Beds",
        },
        {
          id: 2,
          SimilarPropertiesAdvantageIcon: BiBath,
          similarPropertiesAdvantageText: "1 Bathroom",
        },
        {
          id: 3,
          SimilarPropertiesAdvantageIcon: TbZoomInArea,
          similarPropertiesAdvantageText: "23 M",
        },
      ],
    },
    {
      id: 4,
      similarPropertiesImage: similarPropertiesImage4,
      similarPropertiesImageAlt: "Similar properties image 4",
      similarPropertiesHeadingText: "Cairo, Ain Shams near universities",
      similarPropertiesRating: 4.5,
      similarPropertiesRatingCount: 88,
      similarPropertiesYear: "Full Year",
      similarPropertiesCost: 120,
      similarPropertiesDepartmentBills: "Department .Bills Included",
      similarPropertiesAdvantages: [
        {
          id: 1,
          SimilarPropertiesAdvantageIcon: PiBedLight,
          similarPropertiesAdvantageText: "4 Beds",
        },
        {
          id: 2,
          SimilarPropertiesAdvantageIcon: BiBath,
          similarPropertiesAdvantageText: "1 Bathroom",
        },
        {
          id: 3,
          SimilarPropertiesAdvantageIcon: TbZoomInArea,
          similarPropertiesAdvantageText: "23 M",
        },
      ],
    },
    {
      id: 5,
      similarPropertiesImage: similarPropertiesImage1,
      similarPropertiesImageAlt: "Similar properties image 1",
      similarPropertiesHeadingText: "Cairo, Ain Shams near universities",
      similarPropertiesRating: 4.5,
      similarPropertiesRatingCount: 88,
      similarPropertiesYear: "Full Year",
      similarPropertiesCost: 120,
      similarPropertiesDepartmentBills: "Department .Bills Included",
      similarPropertiesAdvantages: [
        {
          id: 1,
          SimilarPropertiesAdvantageIcon: PiBedLight,
          similarPropertiesAdvantageText: "4 Beds",
        },
        {
          id: 2,
          SimilarPropertiesAdvantageIcon: BiBath,
          similarPropertiesAdvantageText: "1 Bathroom",
        },
        {
          id: 3,
          SimilarPropertiesAdvantageIcon: TbZoomInArea,
          similarPropertiesAdvantageText: "23 M",
        },
      ],
    },
    {
      id: 6,
      similarPropertiesImage: similarPropertiesImage2,
      similarPropertiesImageAlt: "Similar properties image 2",
      similarPropertiesHeadingText: "Cairo, Ain Shams near universities",
      similarPropertiesRating: 4.5,
      similarPropertiesRatingCount: 88,
      similarPropertiesYear: "Full Year",
      similarPropertiesCost: 120,
      similarPropertiesDepartmentBills: "Department .Bills Included",
      similarPropertiesAdvantages: [
        {
          id: 1,
          SimilarPropertiesAdvantageIcon: PiBedLight,
          similarPropertiesAdvantageText: "4 Beds",
        },
        {
          id: 2,
          SimilarPropertiesAdvantageIcon: BiBath,
          similarPropertiesAdvantageText: "1 Bathroom",
        },
        {
          id: 3,
          SimilarPropertiesAdvantageIcon: TbZoomInArea,
          similarPropertiesAdvantageText: "23 M",
        },
      ],
    },
    {
      id: 7,
      similarPropertiesImage: similarPropertiesImage3,
      similarPropertiesImageAlt: "Similar properties image 3",
      similarPropertiesHeadingText: "Cairo, Ain Shams near universities",
      similarPropertiesRating: 4.5,
      similarPropertiesRatingCount: 88,
      similarPropertiesYear: "Full Year",
      similarPropertiesCost: 120,
      similarPropertiesDepartmentBills: "Department .Bills Included",
      similarPropertiesAdvantages: [
        {
          id: 1,
          SimilarPropertiesAdvantageIcon: PiBedLight,
          similarPropertiesAdvantageText: "4 Beds",
        },
        {
          id: 2,
          SimilarPropertiesAdvantageIcon: BiBath,
          similarPropertiesAdvantageText: "1 Bathroom",
        },
        {
          id: 3,
          SimilarPropertiesAdvantageIcon: TbZoomInArea,
          similarPropertiesAdvantageText: "23 M",
        },
      ],
    },
    {
      id: 8,
      similarPropertiesImage: similarPropertiesImage4,
      similarPropertiesImageAlt: "Similar properties image 4",
      similarPropertiesHeadingText: "Cairo, Ain Shams near universities",
      similarPropertiesRating: 4.5,
      similarPropertiesRatingCount: 88,
      similarPropertiesYear: "Full Year",
      similarPropertiesCost: 120,
      similarPropertiesDepartmentBills: "Department .Bills Included",
      similarPropertiesAdvantages: [
        {
          id: 1,
          SimilarPropertiesAdvantageIcon: PiBedLight,
          similarPropertiesAdvantageText: "4 Beds",
        },
        {
          id: 2,
          SimilarPropertiesAdvantageIcon: BiBath,
          similarPropertiesAdvantageText: "1 Bathroom",
        },
        {
          id: 3,
          SimilarPropertiesAdvantageIcon: TbZoomInArea,
          similarPropertiesAdvantageText: "23 M",
        },
      ],
    },
  ],
};

export default content;
