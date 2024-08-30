import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MetaBlogLogo,
  TwitterIcon,
} from "../icons/FooterIcons";

export const Footer = () => {
  return (
    <div
      className="w-screen flex justify-center
     bg-[#F6F6F7]"
    >
      <div className="container max-w-[1220px] ">
        <div className="flex justify-between  pt-16  ">
          <div className="flex flex-col gap-6">
            <p className="text-[#181A2A] text-lg font-semibold">About</p>
            <p className="text-wrap w-[280px] h-[120px] text-[#696A75] text-base font-normal ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <div>
              <p className="text-[#181A2A] text-base font-normal ">
                Email : info@jstemplate.net
              </p>
              <p className="text-[#181A2A] text-base font-normal ">
                Phone : 880 123 456 789
              </p>
            </div>
          </div>
          <div className="flex gap-2 flex-col">
            <p>Home</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>
          <div className="flex gap-5 ">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <LinkedinIcon />
          </div>
        </div>
        <div className="mt-6 border-t flex justify-between pt-8 pb-8 border-[#DCDDDF]">
          <div className="flex gap-3">
            <div>
              <MetaBlogLogo />
            </div>
            <div>
              <div className="flex items-center">
                <p className="text-xl font-normal">Meta</p>
                <p className="text-xl font-extrabold">Blog</p>
              </div>

              <p className="text-[#3B3C4A]">© All Rights Reserved.</p>
            </div>
          </div>
          <div className="flex gap-8">
            <p className="text-[#3B3C4A]">Terms of Use</p>
            <p className="text-[#E8E8EA]">|</p>
            <p className="text-[#3B3C4A]">Privacy Policy</p>
            <p className="text-[#E8E8EA]">|</p>
            <p className="text-[#3B3C4A]">Cookie Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};
