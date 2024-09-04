export const CarouselCard = ({ article }) => {
  const publishedDate = new Date(article.published_at);
  const generatMonth = (month) => {
    switch (month) {
      case 1:
        return "January";
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December";
    }
  };
  return (
    <div
      style={{
        backgroundImage: `url(${article.cover_image})`,
        height: "600px",
        width: "auto",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-[600px] border mt-[100px] flex justify-start rounded-xl items-end "
    >
      <div className="w-1/2 h-[252px] border rounded-xl ml-2 p-10 mb-2 bg-white gap-5  ">
        <span className="bg-[#4B6BFB] p-1 rounded-md text-[#FFFF]">
          {article.tag_list[0]}
        </span>
        <p className="text-[#181A2A] line-clamp-2  font-semibold text-4xl mt-4 ">
          {article.description}
        </p>
        <p className="text-[#97989F] font-normal text-base mt-6 ">
          {generatMonth(publishedDate.getMonth())} {publishedDate.getDay()},
          {publishedDate.getFullYear()}
        </p>
      </div>
    </div>
  );
};
