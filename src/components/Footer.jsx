import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  const footerLinks = [
    { name: "Home", href: "/", id: 1 },
    { name: "Blogs", href: "/blogs", id: 2 },
    { name: "About", href: "/about", id: 3 },
    { name: "Contact Us", href: "/contact", id: 4 },
    { name: "Terms & Conditions", href: "/terms", id: 5 },
  ];

  return (
    <>
      <hr className="h-[1px] bg-primary" />
      <div className="bg-[#FFFFFF] flex flex-col justify-center items-center my-10 gap-10">
        <div className="flex gap-3 items-center cursor-pointer">
          <img className="h-8 w-8" src={logo} alt="blognetic" />
          <h1 className="font-[800] text-[24px] text-[#333333]">
            Blognetic
          </h1>
        </div>
        
        <div className="hidden sm:flex gap-5">
          {footerLinks.map((links) => (
            <Link to={links.href} key={links.id} className="nav-text">
              {links.name}
            </Link>
          ))}
        </div>

        <div className="bg-primary w-full flex justify-center items-center py-2">
          <p className="text-white text-center">
            Copyright © 2025 Blognetic. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;