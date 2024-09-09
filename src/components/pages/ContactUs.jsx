import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

const ContactUsPage = () => {
  return (
    <div className="flex items-center flex-col">
      <div className="container max-w-[1220px] flex items-center flex-col ">
        <Header />
        <div className="w-[624px] mt-28 mb-28  ">
          <div className="flex gap-5 flex-col ">
            <div className="flex flex-col gap-5">
              <h1 className="text-[#000] text-4xl font-semibold ">
                Contact Us
              </h1>
              <p className="text-[#696A75]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam
              </p>
            </div>
            <div className="flex gap-14 ">
              <div className="w-[294px] h-[133px] flex gap-3 flex-col rounded-xl border p-4 ">
                <h1 className="text-[#000] text-2xl font-semibold ">Address</h1>
                <p className=" text-[#696A75]">
                  1328 Oak Ridge Drive, Saint Louis, Missouri
                </p>
              </div>
              <div className="w-[294px] h-[133px] flex gap-3 flex-col rounded-xl  border p-4 ">
                <h1 className="text-[#000] text-2xl font-semibold ">Contact</h1>
                <div>
                  <p className="text-[#696A75]">313-332-8662</p>
                  <p className="text-[#696A75]">info@email.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[643px] h-[440px] bg-[#F6F6F7] gap-6 flex flex-col border mt-12 pt-[29px] pl-[35px] pr-[130px] pb-[26px] ">
            <h1>Leave a Message</h1>
            <div className="flex gap-6">
              <input
                className="w-[225px] h-[38px] pl-[20px]"
                placeholder="Your Name"
                type="text"
              />
              <input
                className="w-[225px] h-[38px] pl-[20px] "
                placeholder="Your Email"
                type="text"
              />
            </div>
            <input
              className="w-[474px] pl-[20px] h-[38px] "
              placeholder="Subject"
              type="text"
            />
            <input
              className="w-[474px] h-[134px] align-top pl-[20px] pt-[14px] text-start "
              placeholder="Write a message"
              type="text"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ContactUsPage;
