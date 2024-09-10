import Link from "next/link";
import { HeaderIcon } from "../icons/HeaderIcon";
import { SearchIcon } from "../icons/SearchIcon";

export const Header = () => {
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
      <div className="border rounded-md flex items-center h-5  gap-3 p-4 bg-gray-200">
        <input
          className="bg-gray-200 w-28 "
          type="text"
          placeholder="Search"
          name=""
          id=""
        />
        <SearchIcon />
      </div>
    </div>
  );
};
