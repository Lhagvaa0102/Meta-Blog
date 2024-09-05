import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

const SinglePostPage = () => {
  const router = useRouter();
  const [article, setArticle] = useState({});
  const fetchData = () => {
    fetch(`https://dev.to/api/articles/${router.query.id}`)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log();
  return (
    <div className="flex flex-col items-center">
      <div className="container max-w-[1220px] flex flex-col items-center">
        <Header />
        <div className="w-[800px] mt-28 ">
          <h1 className="font-bold text-4xl ">{article?.title}</h1>
          <div className="flex items-center gap-3 mt-5">
            <img
              className="w-9 h-9 border rounded-full "
              src={article?.user?.profile_image}
            />
            <p className="text-[#97989F]">{article?.user?.name}</p>
          </div>

          <div className="flex items-center flex-col text-[#3B3C4A] gap-8">
            <img className="mt-8" src={article?.cover_image} />
            <h1 className="text-2xl font-semibold">{article?.description}</h1>
            <div>
              <p>
                Traveling is an enriching experience that opens up new horizons,
                exposes us to different cultures, and creates memories that last
                a lifetime. However, traveling can also be stressful and
                overwhelming, especially if you don't plan and prepare
                adequately. In this blog article, we'll explore tips and tricks
                for a memorable journey and how to make the most of your
                travels. One of the most rewarding aspects of traveling is
                immersing yourself in the local culture and customs. This
                includes trying local cuisine, attending cultural events and
                festivals, and interacting with locals. Learning a few phrases
                in the local language can also go a long way in making
                connections and showing respect.
              </p>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">
                Research Your Destination
              </h1>
              <p>
                Before embarking on your journey, take the time to research your
                destination. This includes understanding the local culture,
                customs, and laws, as well as identifying top attractions,
                restaurants, and accommodations. Doing so will help you navigate
                your destination with confidence and avoid any cultural faux
                pas. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. In hendrerit gravida rutrum quisque non tellus orci ac
                auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit
                amet. Aenean euismod elementum nisi quis eleifend quam
                adipiscing vitae. Viverra adipiscing at in tellus.
              </p>
            </div>
            <div className="mb-24">
              <h1 className="text-2xl font-semibold">Plan Your Itinerary</h1>
              <p>
                While it's essential to leave room for spontaneity and
                unexpected adventures, having a rough itinerary can help you
                make the most of your time and budget. Identify the must-see
                sights and experiences and prioritize them according to your
                interests and preferences. This will help you avoid
                overscheduling and ensure that you have time to relax and enjoy
                your journey. Vitae sapien pellentesque habitant morbi
                tristique. Luctus venenatis lectus magna fringilla. Nec
                ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non
                sodales neque sodales ut etiam sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default SinglePostPage;
