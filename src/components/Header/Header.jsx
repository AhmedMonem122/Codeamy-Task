import { useEffect, useState } from "react";
import { GrLanguage } from "react-icons/gr";
import { FiChevronDown } from "react-icons/fi";
import Navbar from "../Navbar/Navbar";

const Header = () => {
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
      <div className="hidden lg:flex items-center justify-end gap-[4px] mb-3 mr-11">
        <div className="w-[24px] h-[24px] text-[20px] text-[#F8B940]">
          <GrLanguage />
        </div>
        <p className="font-[500] text-[14px] text-lightBlack cursor-pointer">
          English
        </p>
        <div className="w-[16px] h-[16px] text-[#6E7079] cursor-pointer">
          <FiChevronDown />
        </div>
      </div>

      <Navbar />
    </header>
  );
};

export default Header;
