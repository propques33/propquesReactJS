import { cn } from "../lib/utils";
import Marquee from "../components/ui/marquee";
import workvistarlogo from '/workvistarlogo.png'
import siolimAsset from '/siolimAsset.png'
import workjarAsset from '/workjarAsset.png'
import workviaalogo from '/workviaalogo.png'
import cubilogo from '/cubilogo.png'
import summit from '/summit.png'
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "An underperforming standalone building was refurbished into an attractive & promising managed office space with a bucketful of recreational facilities—the result was increased revenue with over 90% office occupancy.",
    img: workjarAsset,
  },
  {
    name: "Jill",
    username: "@jill",
    body: "Innovative & research-backed facelift of a strategically located commercial space into a well-facilitated hybrid office to tap the nearby home office needs.",
    img: cubilogo,
  },
  {
    name: "John",
    username: "@john",
    body: "Over 1.6X increase in the rental rate of the corporate property.  3X increase in the occupancy rate in just 6 months. Complete marketing & strategic makeover to increase the visibility & revenue generation.",
    img: summit,
  },
  {
    name: "Jane",
    username: "@jane",
    body: "100% occupancy in less than 3 months. Increased rental income by 42 rs. Assistance in revenue increase by 3X. Achieved great results with optimum occupancy with multiple clients,.",
    img: workviaalogo,
  },
 
  {
    name: "James",
    username: "@james",
    body: "An unoccupied villa refurbished into an attractive and promising coworking café. Rising to optimum occupancy with a bucketful of office facilities along with delectable food.",
    img: siolimAsset,
  },
  {
    name: "James",
    username: "@james",
    body: "Growth in the rental income of workspaces by almost 75%. Increased 60-70% occupancy rate throughout the year and continuous cash flow. Complete strategic makeover to increase leads, revenue generation, and proper visibility.",
    img: workvistarlogo,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
// const firstRow = reviews.slice(0, reviews.length / 2);
// const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    
    <figure
      className={cn(
        "relative w-96 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
    <div className="flex flex-row items-center gap-2">
  <img 
    className=" h-16  md:h-16 object-cover" 
    alt={name} 
    src={img} 
  />
</div>

      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Marqueee() {
  return (
    <div className="md:px-16 px-4 py-8">
      <h1 className="md:text-4xl text-3xl font-semibold   mt-4 md:pt-8 py-4 ">
        Spaces we have transformed
        <span className="text-blue-500 text-4xl rounded-full">.</span>
      </h1>
      <h1 className="text-xl md:text-2xl lg:text-3xl text-center md:text-left">
        <RiDoubleQuotesL
          className="text-blue-500 inline-block text mb-4 "
          size={20}
        />
        Transforming underutilized spaces into thriving,{" "}
        <span className="font-semibold font">
          revenue-generating commercial hubs
        </span>
        <RiDoubleQuotesR
          className="text-blue-500 inline-block text mb-4"
          size={20}
        />
      </h1>
      <div className="relative flex w-full mt-4 flex-col items-center justify-center overflow-hidden rounded-lg bordr bg-background ">
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
