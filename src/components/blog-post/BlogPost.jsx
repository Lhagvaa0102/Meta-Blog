import Link from "next/link";
import { BlogPostCard } from "./BlogPostCard";
import { BlogPostHeader } from "./BlogPostHeader";
import { useState, useEffect } from "react";

export const BlogPost = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(9);
  const [tag, setTag] = useState("");
  const fetchData = () => {
    fetch(` https://dev.to/api/articles?per_page=${page}&tag=${tag}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    fetchData();
  }, [tag, page]);
  articles.tag_list;

  const handleChange = (newtag) => {
    setTag(newtag);
  };
  const handleMorePageClick = () => {
    setPage(page + 3);
  };

  return (
    <div className="mt-[100px]">
      <h1 className="font-bold text-2xl">All Blog Post</h1>
      <BlogPostHeader handleChange={handleChange} />
      <div className="mt-8 flex gap-y-5 flex-wrap justify-between ">
        {articles.map((article) => {
          return (
            <Link href={`blog-list/${article.id}`}>
              <BlogPostCard
                article={article}
                key={article?.id}
                created_at={article.created_at}
              />
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleMorePageClick}
          className="border mt-8 mb-8 rounded pt-3 pb-3 pl-5 pr-5 text-wrap "
        >
          Load More
        </button>
      </div>
    </div>
  );
};
