import { BlogPost } from "../blog-post/BlogPost";
import { Carousel } from "../carousel/Carousel";
import { Header } from "../header/Header";
import { Trending } from "../trending/Trending";

export default function HomePage() {
  return (
    <div className="flex justify-center ">
      <div className="container ">
        <Header />
        <Carousel />
        <Trending />
        <BlogPost />
      </div>
    </div>
  );
}
