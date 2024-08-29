export const TrendCard = ({ text, badge, imgurl }) => {
  return (
    <div
      className="w-[293px] h-[320px] p-10 flex flex-col items-start gap-4 justify-end border rounded-xl bg-cover bg-center bg-[url('https://img.freepik.com/free-vector/particle-face-tech-background_23-2148309417.jpg')] "
      //   style={{
      //     backgroundImage: `url${imgurl}`,
      //   }}
    >
      <span className="text-white pl-2 pr-2 bg-[#4B6BFB] rounded ">
        {badge}
      </span>
      <p className="text-white  ">{text}</p>
    </div>
  );
};
