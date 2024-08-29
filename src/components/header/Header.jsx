import { HeaderIcon } from "../icons/HeaderIcon";
import { SearchIcon } from "../icons/SearchIcon";

export const Header = () => {
  return (
    <div className="container flex sticky z-50 p-9 justify-between ">
      <div>
        <HeaderIcon />
      </div>
      <div className="flex text-[#3B3C4A] items-center gap-10 ">
        <a href="">Home</a>
        <a href="">Blog</a>
        <a href="">Contact</a>
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
