import { TrendCard } from "./TrendCard";

export const Trending = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-[100px] flex flex-col gap-[30px] ">
      <h1 className="font-bold text-2xl">Trending</h1>
      <div className="flex gap-5">
        <TrendCard
          badge={"Technology"}
          text={
            "The Impact of Technology on the Workplace: How Technology is Changing"
          }
        />
      </div>
    </div>
  );
};
