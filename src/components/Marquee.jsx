import { cn } from "../lib/utils";
import Marquee from "../components/ui/marquee";

import cubilogo from "/cubilogo.png";
import summit from "/summit.png";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const reviews = [
  // {
  //   name: "Jack",
  //   username: "@jack",
  //   body: "An underperforming standalone building was refurbished into an attractive & promising managed office space with a bucketful of recreational facilities—the result was increased revenue with over 90% office occupancy.",
  //   img: workjarAsset,
  //   route: "/",
  // },
  {
    name: "Jill",
    username: "@jill",
    body: "Innovative & research-backed facelift of a strategically located commercial space into a well-facilitated hybrid office to tap the nearby home office needs.",
    img: cubilogo,
    route: "/case-study/cubispace",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "Reached 60% occupancy within the first quarter and 90% by the end of the first year. Monthly rental income increased by 80%, thanks to the coworking model’s premium pricing.",
    img: "https://www.karyasthal.com/wp-content/uploads/2022/06/logo-2.png.webp",
    route: "/case-study/karyasthal",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "Achieved 60% occupancy within three months of launch, with continued growth. Rental income grew from ₹50/sq. ft. to ₹80/sq. ft. under the coworking model.",
    img: "https://worqspot.com/wp-content/uploads/2023/06/LogoAsset-1.png",
    route: "/case-study/worqspot",
  },
  {
    name: "Jill",
    username: "@jill",
    body: " A steady 90-100% occupancy rate has been maintained since launch. The coworking space became a community hub, elevating the Tolani Group's reputation.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm-ZcsX9pV17OshYBnyieg1C_0-ADQ9qzO2g&s",
    route: "/case-study/sapna-sangeeta-offices",
  },
  {
    name: "Jill",
    username: "@jill",
    body: " Achieved a steady 12% occupancy rate within the first year, building a loyal base of professionals and startups. Generated ₹120 per sq. ft. for the owners, significantly outperforming expectations for the area.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMMeMERTE_nqSagKZl60UwHcWw--o-Qj2UEQ&s",
    route: "/case-study/workdesq",
  },
  {
    name: "John",
    username: "@john",
    body: "Over 1.6X increase in the rental rate of the corporate property.  3X increase in the occupancy rate in just 6 months. Complete marketing & strategic makeover to increase the visibility & revenue generation.",
    img: summit,
    route: "/case-study/summit-space",
  },
  // {
  //   name: "Jane",
  //   username: "@jane",
  //   body: "100% occupancy in less than 3 months. Increased rental income by 42 rs. Assistance in revenue increase by 3X. Achieved great results with optimum occupancy with multiple clients,.",
  //   img: workviaalogo,
  //   route: "/workviaa",
  // },
  // {
  //   name: "James",
  //   username: "@james",
  //   body: "An unoccupied villa refurbished into an attractive and promising coworking café. Rising to optimum occupancy with a bucketful of office facilities along with delectable food.",
  //   img: siolimAsset,
  //   route: "/",
  // },
  // {
  //   name: "James",
  //   username: "@james",
  //   body: "Growth in the rental income of workspaces by almost 75%. Increased 60-70% occupancy rate throughout the year and continuous cash flow. Complete strategic makeover to increase leads, revenue generation, and proper visibility.",
  //   img: workvistarlogo,
  //   route: "/work-vistar",
  // },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <figure
      onClick={handleClick}
      className={cn(
        "relative w-96 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="h-16 md:h-16 object-cover"
          alt={name}
          src={img}
          loading="lazy"
        />
      </div>

      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Marqueee() {
  return (
    <div className="md:px-16 px-4 py- font-extrabold">
      <div className="px-4 sm:px-8 md:px-0 pt-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 md:pt-0 py-4 text-center md:text-left">
          Spaces we have transformed
          <span className="text-blue-500 text-3xl sm:text-4xl rounded-full">
            .
          </span>
        </h1>

        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center md:text-left text-zinc-700">
          <RiDoubleQuotesL
            className="text-blue-500 inline-block mb-2 sm:mb-4"
            size={20}
          />
          Transforming underutilized spaces into thriving,{" "}
          <span className="font-semibold text-zinc-900 font">
            revenue-generating commercial hubs
          </span>
          <RiDoubleQuotesR
            className="text-blue-500 inline-block mb-2 sm:mb-4"
            size={20}
          />
        </h1>
      </div>

      <div className="relative flex w-full md:mt-4 mt-4 flex-col items-center justify-center overflow-hidden rounded-lg bordr bg-background">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review, key) => (
            <ReviewCard key={key} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review, key) => (
            <ReviewCard key={key} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
}

