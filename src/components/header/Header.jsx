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
  const [isOpen, setIsOpen] = useState(false);
  // if (typeof window !== "undefined") {
  //   document.addEventListener("mousedown", () => {
  //     setIsOpen(false);
  //   });
  // }
  const handleInputChange = (event) => {
    setIsOpen(true);
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

  return (
    <div className="container flex  p-9 justify-between ">
      <div>
        <Link href="/">
          <HeaderIcon />
        </Link>
      </div>
      <div className="flex text-[#3B3C4A] items-center gap-10 ">
        <Link href="/">Home</Link>
        <Link href="/blog-list">Blog</Link>
        <Link href="/contact-us">Contact</Link>
      </div>
      <div className="border rounded-md flex relative items-center bg-gray-200 p-2 gap-3">
        <div className="flex flex-col   w-28 ">
          <input
            onChange={handleInputChange}
            className=" w-28 bg-gray-200 outline-none "
            type="text"
            placeholder="Search"
            value={searchValue}
          />
          <div
            className={` ${
              isOpen ? "h-[170px]" : "h-0"
            } flex  bg-gray-200  overflow-hidden  transition-all duration-200  flex-col absolute top-12 left-0 rounded  `}
          >
            {searchValue &&
              filteredArticles.map((article) => {
                filteredArticles.length = 5;
                return (
                  <Link href={`/blog-list/${article.id}`}>
                    <div
                      key={article?.id}
                      className="line-clamp-1 p-1 border-b box-border "
                    >
                      {article?.title}
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>

        <SearchIcon />
      </div>
    </div>
  );
};
