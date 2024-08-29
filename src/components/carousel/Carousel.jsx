import { LeftArrow } from "../icons/LeftArrow";
import { RightArrow } from "../icons/RightArrow";

export const Carousel = () => {
  return (
    <div>
      <div className="h-[600px] carousel_background border mt-[100px] flex justify-start rounded-xl items-end ">
        <div className="w-[598px] h-[252px] border rounded-xl ml-2 p-10 mb-2 bg-white gap-5  ">
          <span className="bg-[#4B6BFB] p-1 rounded-md text-[#FFFF]">
            Technology
          </span>
          <p className="text-[#181A2A] font-semibold text-4xl mt-4 ">
            Grid system for better Design User Interface
          </p>
          <p className="text-[#97989F] font-normal text-base mt-6 ">
            August 20, 2022
          </p>
        </div>
      </div>
      <div className="mt-3 flex gap-2 justify-end ">
        <button className=" flex justify-center items-center w-10 h-10 border rounded border-[#696A75] ">
          <LeftArrow />
        </button>
        <button className=" flex justify-center items-center w-10 h-10 border rounded  border-[#696A75] ">
          <RightArrow />
        </button>
      </div>
    </div>
  );
};
