import { useEffect, useState } from "react";
import logo from "../../assets/images/flat-color-icons_home.png";
import { FaBars, FaX } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isStickyNav, setIsStickyNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        setIsStickyNav(true);
      } else {
        setIsStickyNav(false);
      }
    });
  }, []);

  return (
    <header
      className={`py-5 transition-all ${
        isStickyNav ? "sticky top-0 bg-white py-6 z-50" : "relative"
      }`}
    >
      <nav>
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="flex items-center justify-center cursor-pointer">
              <div className="w-[24px] mr-3">
                <img src={logo} alt="UniDorm logo" />
              </div>
              <h1 className="font-[cabin] text-[24px]">
                <span className="font-[700] text-primary">Uni</span>
                <span className="font-[600] text-secondary">Dorm</span>
              </h1>
            </div>
            <div
              className={`flex items-center justify-center w-full absolute -left-full -bottom-[100vh] z-50 h-screen flex-col bg-white lg:static lg:h-auto lg:flex-row lg:bg-transparent transition-all ${
                isOpen ? "!left-0" : "-left-full"
              }`}
            >
              <ul className="flex items-center justify-center font-[roboto] font-[500] text-[16px] mx-auto flex-col lg:flex-row">
                <li className="mr-5 font-bold px-4 py-3">
                  <a href="">Home</a>
                </li>
                <li className="mr-5 font-bold px-4 py-3">
                  <a href="">Properties</a>
                </li>
                <li className="mr-5 font-bold px-4 py-3">
                  <a href="">Blog</a>
                </li>
                <li className="mr-5 font-bold px-4 py-3">
                  <a href="">Contact</a>
                </li>
              </ul>

              <div className="flex items-center justify-center flex-col lg:flex-row">
                <button className="w-[153px] h-[44px] rounded-[12px] border border-white py-[17px] px-[16px] bg-secondary text-white hover:bg-white hover:text-secondary hover:border-secondary transition-all flex items-center justify-center shadow-[0_4px_4px_0_#FFAD331C] font-[500] mb-4 lg:mr-4 lg:mb-0">
                  list a property
                </button>
                <button className="w-[150px] h-[44px] rounded-[12px] border border-white py-[17px] px-[16px] bg-primary text-white hover:bg-white hover:text-primary hover:border-primary transition-all flex items-center justify-center shadow-[0_4px_4px_0_#4A4CC759] font-[500]">
                  Sign In
                </button>
              </div>
            </div>
            <div
              className="ml-auto text-xl cursor-pointer lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaX /> : <FaBars />}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
