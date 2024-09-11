import Link from "next/link";
import { HeaderIcon } from "../icons/HeaderIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { useEffect, useState } from "react";

export const Header = () => {
  const [articlesForSearch, setArticlesForSearch] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const filteredArticles = articlesForSearch?.filter((article) =>
    article?.title?.toLowerCase().includes(searchValue)
  );
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };
  const fetchSearchData = () => {
    fetch(`https://dev.to/api/articles?per_page=100`)
      .then((response) => response.json())
      .then((data) => setArticlesForSearch(data));
  };
  useEffect(() => {
    fetchSearchData();
  }, []);
  console.log(articlesForSearch);
  return (
    <div className="container flex  p-9 justify-between ">
      <div>
        <HeaderIcon />
      </div>
      <div className="flex text-[#3B3C4A] items-center gap-10 ">
        <Link href="/">Home</Link>
        <Link href="/blog-list">Blog</Link>
        <Link href="/contact-us">Contact</Link>
      </div>
      <div className="border rounded-md flex flex-col items-center h-5  gap-3 p-4 bg-gray-200">
        <input
          onChange={handleInputChange}
          className="bg-gray-200 w-28 "
          type="text"
          placeholder="Search"
          name=""
          id=""
        />
        <div className="flex flex-col">
          {searchValue &&
            filteredArticles.map((article) => {
              filteredArticles.length = 5;
              return (
                <Link href={`/blog-list/${article.id}`}>
                  <div className="w-[186px] line-clamp-1">{article?.title}</div>
                </Link>
              );
            })}
        </div>

        <SearchIcon />
      </div>
    </div>
  );
};
