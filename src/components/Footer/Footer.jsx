import footerImage from "../../assets/images/flat-color-icons_home.png";
import { FaFacebookF } from "react-icons/fa";
import { TbBrandTwitter } from "react-icons/tb";
import { CiInstagram } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";
import { AiOutlineSend } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-footerPink mt-40 pt-8 sm:pt-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:border-b-[2px] sm:border-lightBlack sm:border-opacity-40 pb-24 gap-[30px] sm:gap-[87px]">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center cursor-pointer mb-[10px] sm:mb-4">
              <div className="w-[24px] mr-3">
                <img src={footerImage} alt="UniDorm logo" />
              </div>
              <h1 className="font-[cabin] text-[24px] font-[600] text-secondary">
                UniDorm
              </h1>
            </div>

            <h2 className="font-[600] sm:font-[500] text-[20px] text-primary mb-[10px]">
              Subscribe
            </h2>

            <div className="relative w-fit">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-[4px] border-[1.5px] border-lightBlack py-[12px] pr-0 pl-[16px] placeholder:font-[outfit] placeholder:font-[400] placeholder:text-[16px] placeholder:text-lightBlack placeholder:opacity-40 bg-transparent"
              />
              <button className="w-[24px] h-[24px] text-[20px] text-lightBlack absolute top-1/2 right-0 -translate-y-1/2 mr-4 flex items-center justify-center rounded-full hover:bg-gray-50 hover:text-primary transition-all">
                <AiOutlineSend />
              </button>
            </div>
          </div>
          <div>
            <h2 className="font-[600] text-[20px] text-primary mb-4">
              Support
            </h2>
            <ul className="font-[outfit] font-[400] text-[16px] text-lightBlack">
              <li className="mb-4">
                <a href="" className="hover:text-primary transition-all">
                  111 Bijoy sarani, Dhaka,
                  <br /> DH 1515, Bangladesh.
                </a>
              </li>
              <li className="mb-4">
                <a href="" className="hover:text-primary transition-all">
                  exclusive@gmail.com
                </a>
              </li>
              <li className="mb-4">
                <a href="" className="hover:text-primary transition-all">
                  +88015-88888-9999
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-[600] text-[20px] text-primary mb-4">
              Account
            </h2>
            <ul className="font-[400] text-[16px] text-lightBlack">
              <li className="mb-4">
                <a href="" className="hover:text-primary transition-all">
                  My Account
                </a>
              </li>
              <li className="mb-4">
                <a href="" className="hover:text-primary transition-all">
                  Login / Register
                </a>
              </li>
              <li className="mb-4">
                <a href="" className="hover:text-primary transition-all">
                  Wishlist
                </a>
              </li>
              <li className="mb-4">
                <a href="" className="hover:text-primary transition-all">
                  Properties
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-[600] text-[20px] text-primary mb-4">
              About UniDorm
            </h2>
            <ul className="font-[400] text-[16px] text-lightBlack">
              <li className="mb-4">
                <a href="" className="hover:text-primary transition-all">
                  Contact
                </a>
              </li>
              <li className="mb-4">
                <a href="" className="hover:text-primary transition-all">
                  Want to be A seller ?
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-1 text-center xl:text-left">
            <h2 className="font-[600] text-[20px] text-primary mb-4">
              Follow Us
            </h2>
            <ul className="font-[400] text-[16px] text-lightBlack flex items-center gap-[24px] justify-center xl:justify-normal">
              <li>
                <a href="" className="hover:text-primary transition-all">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="" className="hover:text-primary transition-all">
                  <TbBrandTwitter />
                </a>
              </li>
              <li>
                <a href="" className="hover:text-primary transition-all">
                  <CiInstagram />
                </a>
              </li>
              <li>
                <a href="" className="hover:text-primary transition-all">
                  <RiLinkedinLine />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative font-[outfit] sm:font-[roboto] text-center font-[400] text-[16px] text-[#33343A] sm:text-lightBlack opacity-60 sm:opacity-40 pt-6 pb-7">
          <div className="absolute top-0 left-1/2 w-2/4 h-[2px] bg-[#33343A] -translate-x-1/2 opacity-40 sm:hidden"></div>
          <p>Copyright UniDorm 2023. All right reserved &copy;</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
