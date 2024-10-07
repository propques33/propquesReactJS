import { cn } from "../lib/utils";
import Marquee from "../components/ui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "An underperforming standalone building was refurbished into an attractive & promising managed office space with a bucketful of recreational facilities—the result was increased revenue with over 90% office occupancy.",
    img: "https://propques.com/wp-content/uploads/2023/02/workjarAsset-9@0.75x-8.png",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "Innovative & research-backed facelift of a strategically located commercial space into a well-facilitated hybrid office to tap the nearby home office needs.",
    img: "https://propques.com/wp-content/uploads/2023/02/cubispaceAsset-7@0.75x-8.png",
  },
  {
    name: "John",
    username: "@john",
    body: "Over 1.6X increase in the rental rate of the corporate property.  3X increase in the occupancy rate in just 6 months. Complete marketing & strategic makeover to increase the visibility & revenue generation.",
    img: "https://propques.com/wp-content/uploads/2023/03/summit-spaceAsset-27@0.75x-8.png",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "100% occupancy in less than 3 months. Increased rental income by 42 rs. Assistance in revenue increase by 3X. Achieved great results with optimum occupancy with multiple clients,.",
    img: "https://propques.com/wp-content/uploads/2023/02/workviaaAsset-10@0.75x-8.png",
  },
 
  {
    name: "James",
    username: "@james",
    body: "An unoccupied villa refurbished into an attractive and promising coworking café. Rising to optimum occupancy with a bucketful of office facilities along with delectable food.",
    img: "https://propques.com/wp-content/uploads/2023/02/siolimAsset-19@0.75x-8.png",
  },
  {
    name: "James",
    username: "@james",
    body: "Growth in the rental income of workspaces by almost 75%. Increased 60-70% occupancy rate throughout the year and continuous cash flow. Complete strategic makeover to increase leads, revenue generation, and proper visibility.",
    img: "https://propques.com/wp-content/uploads/2023/02/workvistarAsset-11@0.75x-8.png",
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
        <img className="" width="" height="" alt={name} src={img} />
        
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Marqueee() {
  return (
    <>
    <h1 className="md:text-5xl text-3xl capitalize w-full font-semibold text-center  mt-4 md:py-8 py-2 ">
    Spaces we have transformed 

    </h1>
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bordr bg-background ">
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
    
    </>
  );
}
