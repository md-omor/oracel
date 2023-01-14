import { blog } from "../config/constants";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BlogCard from "../partials/BlogCard";

const Blog = () => {
  return (
    <div className="container mx-auto py-[110px] relative">
      <h1 className="font-primary font-semibold text-[38px] leading-[48px] mb-[30px] text-white">
        Our blog
      </h1>
      <div className="flex flex-wrap gap-4 justify-start items-center overflow-auto relative">
        {blog?.map((data, index) => (
          <BlogCard {...data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
