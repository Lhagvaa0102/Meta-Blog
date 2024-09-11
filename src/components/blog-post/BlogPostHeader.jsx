export const BlogPostHeader = () => {
  return (
    <div className="mt-8 flex text-[#495057]  font-bold text-xs justify-between">
      <div className="flex gap-5">
        <button className="hover:text-[#D4A373;]">All</button>
        <button className="hover:text-[#D4A373;]">Github</button>
        <button className="hover:text-[#D4A373;]">Meta</button>
        <button className="hover:text-[#D4A373;]">Devchallenge</button>
        <button className="hover:text-[#D4A373;]">Python</button>
        <button className="hover:text-[#D4A373;]">Css</button>
      </div>
      <div>
        <a className="hover:text-[#D4A373;]" href="./blog-list">
          View All
        </a>
      </div>
    </div>
  );
};
