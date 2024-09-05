import Link from "next/link";
import { TrendCard } from "./TrendCard";
import { useState, useEffect } from "react";
export const Trending = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    fetch("https://dev.to/api/articles?per_page=4&top=2")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-[100px] flex flex-col gap-[30px] ">
      <h1 className="font-bold text-2xl">Trending</h1>
      <div className="flex gap-5">
        {articles.map((article) => {
          return (
            <Link href={`blog-list/${article.id}`}>
              <TrendCard article={article} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
