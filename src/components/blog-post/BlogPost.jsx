import { BlogPostCard } from "./BlogPostCard";
import { BlogPostHeader } from "./BlogPostHeader";

export const BlogPost = () => {
  return (
    <div className="mt-[100px]">
      <h1 className="font-bold text-2xl">All Blog Post</h1>
      <BlogPostHeader />
      <div className="mt-8">
        <BlogPostCard
          badge={"Technology"}
          text={
            "The Impact of Technology on the Workplace: How Technology is Changing"
          }
          date={"August 20, 2022"}
        />
      </div>
    </div>
  );
};
