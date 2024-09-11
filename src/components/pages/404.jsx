import Link from "next/link";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export const ErrorPage = () => {
  return (
    <div className="flex justify-center flex-col">
      <div className="flex justify-center flex-col gap-[120px] items-center">
        <Header />
        <div className="flex gap-10 mb-[150px] w-[642px] items-center h-[208px] ">
          <div>
            <h1 className="font-normal text-7xl">404</h1>
          </div>
          <div className="flex flex-col gap-5 items-start border-l pl-10 ">
            <h1 className="text-[24px] text-[#000] font-semibold">
              Page Not Found
            </h1>
            <p className="font-normal text-[18px] text-[#696a75] ">
              We're sorry, This page is unknown or does not exist the page you
              are looking for.
            </p>
            <Link href="/">
              <button className="border rounded bg-[#4B6BFB] text-[#FFFFFF] pt-3 pb-3 pl-4 pr-4">
                Back To Home
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
