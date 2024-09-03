import { BlogPost } from "../blog-post/BlogPost";
import { Carousel } from "../carousel/Carousel";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Trending } from "../trending/Trending";
export default function HomePage() {
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
