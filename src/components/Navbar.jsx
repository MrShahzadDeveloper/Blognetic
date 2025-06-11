import logo from "../assets/logo.png";
import { Search } from "lucide-react";
import Button from "./Button";
import { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

const Navbar = () => {
  const menuLinks = [
    { name: "Home", id: 1 },
    { name: "Blogs", id: 2 },
    { name: "About", id: 3 },
    { name: "Contact Us", id: 4 },
    { name: "Terms & Conditions", id: 5 },
  ];
  const [visible, setVisible] = useState(false);
  const toggleMenu = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className="bg-[#FFFFFF] flex justify-between items-center py-4 px-8 sm:px-16">
        <div className="flex gap-3 items-center cursor-pointer">
          <img className="h-6 w-6 sm:h-8 sm:w-8 " src={logo} alt="blognetic" />
          <h1 className="font-[800] text-[20px] sm:text-[24px] text-[#333333] ">
            Blognetic
          </h1>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {menuLinks.map((links) => (
            <h4 key={links.id} className="hover:text-[#7C4EE4] cursor-pointer ">{links.name}</h4>
          ))}
          <Search strokeWidth={"0.75px"} />
          <Button text="Contact Us" textColor="white" bgColor={"#7C4EE4"} />
        </div>
        <div onClick={toggleMenu} className="flex md:hidden cursor-pointer">
          {visible ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
      {visible ? (
        <div className="flex flex-col justify-center items-end mr-6">
          <div className="bg-[#7f61c4] py-8 px-6 text-center flex flex-col gap-6 rounded-lg ">
            {menuLinks.map((links) => (
              <h4 className="text-white text-xl" key={links.id}>
                {links.name}
              </h4>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
