import BlogCard from "./BlogCard";
import { useState } from "react";
import { blogDetails } from "./blogDetails";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";
import AnimatedBody from "../animations/AnimatedBody";


const Blog = () => {
  // State to control how many blogs are displayed
const [showAll, setShowAll] = useState(false);

// Toggle function for the button
const toggleView = () => {
  setShowAll(!showAll);
};

  return (
    <section className="z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-20 md:pb-16 lg:pb-32" 
    id="blog">
      <div
        className={`relative mb-16 flex w-full flex-col items-center justify-center gap-10  text-[#e4ded7] sm:items-center lg:max-w-[1440px]`}
      >
        {" "}
        <AnimatedWords2
          title={"certifications"}
          style={`flex max-w-[500px] pr-5 flex-col items-start text-left ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:text-center text-[clamp(70px,10vw,155.04px)]`}
        />
        
      </div>
      <div className="lg:w- [850px] grid w-[90%] max-w-[1200px] grid-cols-1 grid-rows-3 place-content-center place-items-center text-[#e4ded7] gap-x-6 gap-y-6 sm:grid-rows-2 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-1">
        {(showAll ? blogDetails : blogDetails.slice(0, 3)).map((blog, index) => {
          return (
            <BlogCard
              key={index}
              title={blog.title}
              image={blog.image}
              url={blog.url}
              date={blog.date}
              available={blog.available}
              index={index}
            />
          );
        })}
      </div>
      <div className="mt-8">
        <button
          onClick={toggleView}
          className="px-6 py-3 rounded-md bg-[#212531] text-[#e4ded7] font-bold text-sm hover:bg-[#2b2f3a] transition-all duration-300"
        >
          {showAll ? "View Less" : "View More"}
        </button>
      </div>
    </section>
  );
};

export default Blog;
