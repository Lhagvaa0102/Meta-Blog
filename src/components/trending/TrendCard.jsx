export const TrendCard = ({ article }) => {
  return (
    <div
      className="w-[293px] h-[320px] p-10 flex flex-col items-start gap-4 justify-end border rounded-xl "
      style={{
        backgroundImage: `url(${article.cover_image})`,
        // width: "100%",
        // height: "100%"
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "6px",
      }}
    >
      <span className="text-white  pl-2 pr-2 bg-[#4B6BFB] rounded ">
        {article.tag_list[0]}
      </span>
      <p className="text-white h-1/3 text-lg truncate box-content font-bold text-wrap  ">
        {article.description}
      </p>
    </div>
  );
};
