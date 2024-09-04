export const TrendCard = ({ article }) => {
  return (
    <div
      className="w-[293px] h-[320px] p-10 flex flex-col items-start gap-4 justify-end border rounded-xl "
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(20, 22, 36, 0.40) 0%, rgba(20, 22, 36, 0.40) 100%), url(${article.cover_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "6px",
        backgroundColor: "rgba(211, 211, 211, 0.5)",
      }}
    >
      <span className="text-white  pl-2 pr-2 bg-[#4B6BFB] rounded ">
        {article.tag_list[0]}
      </span>
      <p className="text-white h-1/3 text-lg line-clamp-3 box-content font-bold text-wrap  ">
        {article.description}
      </p>
    </div>
  );
};
