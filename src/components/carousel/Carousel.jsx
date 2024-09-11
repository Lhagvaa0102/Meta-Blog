import { LeftArrow } from "../icons/LeftArrow";
import { RightArrow } from "../icons/RightArrow";
import { useState, useEffect } from "react";
import { CarouselCard } from "./CarouselCard";
import Link from "next/link";
export const Carousel = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(9);
  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=1&page=${page}&top=3`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  const handleMorePageClick = () => {
    setPage(page + 1);
  };
  const handleMorePageClickLeft = () => {
    setPage(page - 1);
  };
  useEffect(() => {
    fetchData();
  }, [page]);
  return (
    <div>
      {articles.map((article) => {
        return (
          <Link href={`/blog-list/${article.id}`}>
            <CarouselCard article={article} key={article?.id} />
          </Link>
        );
      })}
      <div className="mt-3 flex gap-2 justify-end ">
        <button
          onClick={handleMorePageClickLeft}
          className=" flex justify-center items-center w-10 h-10 border rounded border-[#696A75] "
        >
          <LeftArrow />
        </button>
        <button
          onClick={handleMorePageClick}
          className=" flex justify-center items-center w-10 h-10 border rounded  border-[#696A75] "
        >
          <RightArrow />
        </button>
      </div>
    </div>
  );
};
