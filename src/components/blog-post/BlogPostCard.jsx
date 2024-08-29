export const BlogPostCard = ({ text, badge, imgurl, date }) => {
  return (
    <div className="w-[360px] p-4  border rounded h-[444px]">
      <div className="w-auto h-[240px] p-4 border ">
        <img src={imgurl} />
      </div>
      <div className="mt-4">
        <span className="text-[#4B6BFB]  pl-2 pr-2 bg-gray-100 rounded ">
          {badge}
        </span>
        <p className=" mt-4 font-semibold text-[#181A2A] text-2xl">{text}</p>
        <span className="text-[#97989F] font-normal text-base mt-5 ">
          {date}
        </span>
      </div>
    </div>
  );
};
