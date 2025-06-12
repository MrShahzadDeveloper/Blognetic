import logo from "../assets/logo.png";
import { Search } from "lucide-react";
import Button from "./Button";
import { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuLinks = [
    { name: "Home", href: "/", id: 1 },
    { name: "Blogs", href: "/blogs", id: 2 },
    { name: "About", href: "/about", id: 3 },
    { name: "Contact Us", href: "/contact", id: 4 },
    { name: "Terms & Conditions", href: "/terms", id: 5 },
  ];
  const [visible, setVisible] = useState(false);
  const toggleMenu = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className="bg-[#FFFFFF] flex justify-between items-center py-4 px-8 sm:px-16 sticky top-0">
        <div className="flex gap-3 items-center cursor-pointer">
          <img className="h-6 w-6 sm:h-8 sm:w-8 " src={logo} alt="blognetic" />
          <h1 className="font-[800] text-[20px] sm:text-[24px] text-[#333333] ">
            Blognetic
          </h1>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {menuLinks.map((links) => (
            <Link
              to={links.href}
              key={links.id}
              className="hover:text-[#7C4EE4] cursor-pointer "
            >
              {links.name}
            </Link>
          ))}
          <Search strokeWidth={"0.75px"} />
          <Button text="Contact Us" textColor="white" bgColor={"#7C4EE4"} />
        </div>
        <div onClick={toggleMenu} className="flex md:hidden cursor-pointer">
          {visible ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
      {visible ? (
        <div onClick={toggleMenu} className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-end">
          <div onClick={(e) => e.stopPropagation()} className="bg-[#7f61c4] py-28 text-center flex flex-col gap-3 rounded-l-lg w-[75%] max-w-xs h-full">
            {menuLinks.map((links) => (
              <Link
                to={links.href}
                onClick={toggleMenu}
                className="text-white text-xl py-2 active:bg-[#483080]"
                key={links.id}
              >
                {links.name}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
