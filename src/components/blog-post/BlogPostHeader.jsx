export const BlogPostHeader = ({ handleChange }) => {
  return (
    <div className="mt-8 flex text-[#495057]  font-bold text-xs justify-between">
      <div className="flex gap-5">
        <button
          onClick={() => handleChange("")}
          className="hover:text-[#D4A373;]"
        >
          All
        </button>
        <button
          onClick={() => handleChange("github")}
          className="hover:text-[#D4A373;]"
        >
          Github
        </button>
        <button
          onClick={() => handleChange("meta")}
          className="hover:text-[#D4A373;]"
        >
          Meta
        </button>
        <button
          onClick={() => handleChange("devchallenge")}
          className="hover:text-[#D4A373;]"
        >
          Devchallenge
        </button>
        <button
          onClick={() => handleChange("python")}
          className="hover:text-[#D4A373;]"
        >
          Python
        </button>
        <button
          onClick={() => handleChange("css")}
          className="hover:text-[#D4A373;]"
        >
          Css
        </button>
      </div>
      <div>
        <a className="hover:text-[#D4A373;]" href="./blog-list">
          View All
        </a>
      </div>
    </div>
  );
};
