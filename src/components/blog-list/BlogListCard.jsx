import { format } from "date-fns";
export const BlogListCard = ({ article }) => {
  return (
    <div className="w-[392px] h-[475px] border-[#E8E8EA] rounded-xl border p-4 flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <div
          style={{
            backgroundImage: `url(${
              article.cover_image || "image-not-found.png"
            })`,
            width: "100%",
            height: "240px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "6px",
          }}
        ></div>
        <div>
          <span className=" bg-[#4B6BFB0D] pl-2 pr-2 pt-1 pb-1 rounded-md text-[#4B6BFB]">
            {article.tag_list[0] || "tag not found"}
          </span>
        </div>

        <div className="overflow-hidden h-[100px]">
          <p className="text-2xl line-clamp-3 font-semibold  ">
            {article.description}
          </p>
        </div>
      </div>
      <div className="flex gap-8 justify-start items-center ">
        <div className="flex items-center text-[#97989F] gap-3">
          <img
            className="w-9 h-9 border rounded-full"
            src={article.user.profile_image}
          />
          {article.user.name}
        </div>

        <p className=" text-[#97989F]">
          {format(new Date(article.created_at), "MMMM d, yyyy")}
        </p>
      </div>
    </div>
  );
};
