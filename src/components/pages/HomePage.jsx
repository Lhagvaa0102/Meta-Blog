import { BlogPost } from "../blog-post/BlogPost";
import { Carousel } from "../carousel/Carousel";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Trending } from "../trending/Trending";
import { useState, useEffect } from "react";
export default function HomePage() {
  const [BlogCard, setBlogCard] = useState([]);
  const fetchData = () => {
    fetch(" https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setBlogCard(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center ">
      <div className="container max-w-[1220px] ">
        <Header />
        <Carousel />
        <Trending />
        <BlogPost />
      </div>
      <Footer />
    </div>
  );
}
