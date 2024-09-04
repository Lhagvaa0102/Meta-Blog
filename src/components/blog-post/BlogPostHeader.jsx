export const BlogPostHeader = () => {
  return (
    <div className="mt-8 flex text-[#495057]  font-bold text-xs justify-between">
      <div className="flex gap-5">
        <button className="hover:text-[#D4A373;]">All</button>
        <button className="hover:text-[#D4A373;]">Design</button>
        <button className="hover:text-[#D4A373;]">Travel</button>
        <button className="hover:text-[#D4A373;]">Fashion</button>
        <button className="hover:text-[#D4A373;]">Technology</button>
        <button className="hover:text-[#D4A373;]">Branding</button>
      </div>
      <div>
        <a className="hover:text-[#D4A373;]" href="./blog-list">
          View All
        </a>
      </div>
    </div>
  );
};
