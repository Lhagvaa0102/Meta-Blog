import Link from "next/link";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { useState, useEffect } from "react";
import { BlogListCard } from "../blog-list/BlogListCard";
export const BlogListingPage = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(12);
  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=${page}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    fetchData();
  }, [page]);
  const handleMorePageClick = () => {
    setPage(page + 3);
  };
  return (
    <div className="flex justify-center items-center  flex-col ">
      <div className="container max-w-[1220px]">
        <Header />
        <h1 className="text-[#181A2A] text-2xl  font-bold mt-12 mb-12  ">
          ALL Blog Post
        </h1>
        <div className="flex flex-wrap gap-5">
          {articles.map((article) => {
            return (
              <Link href={`blog-list/${article.id}`}>
                <BlogListCard article={article} key={article?.id} />
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
      <Footer />
    </div>
  );
};
