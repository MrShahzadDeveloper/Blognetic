import logo from "../assets/logo.png";
import { Search } from "lucide-react";
import Button from "./Button";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Added Framer Motion

const Navbar = () => {
  const menuLinks = [
    { name: "Home", href: "/", id: 1 },
    { name: "Blogs", href: "/blogs", id: 2 },
    { name: "About", href: "/about", id: 3 },
    { name: "Terms & Conditions", href: "/terms", id: 5 },
  ];
  
  const [visible, setVisible] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visibleNav, setVisibleNav] = useState(true);

  const toggleMenu = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      
      if (prevScrollPos > currentScrollPos || currentScrollPos < 10) {
        setVisibleNav(true);
      } else {
        setVisibleNav(false);
        if (visible) setVisible(false);
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <>
      <motion.div
        className="bg-[#FFFFFF] flex justify-between items-center py-4 px-8 sm:px-16 sticky top-0 z-50 shadow-md"
        initial={{ y: 0 }}
        animate={{ 
          y: visibleNav ? 0 : -100,
          transition: { type: "spring", damping: 30, stiffness: 300 }
        }}
      >
        <div className="flex gap-3 items-center cursor-pointer">
          <img className="h-6 w-6 sm:h-8 sm:w-8 " src={logo} alt="blognetic" />
          <h1 className="font-[800] text-[20px] sm:text-[24px] text-[#333333]">
            Blognetic
          </h1>
        </div>
        <div className="hidden lg:flex items-center gap-8">
          {menuLinks.map((links) => (
            <Link
              to={links.href}
              key={links.id}
              className="hover:text-[#7C4EE4] cursor-pointer"
            >
              {links.name}
            </Link>
          ))}
          <Search strokeWidth={"0.75px"} />
          <Button link="/contact" text="Contact Us" textColor="white" bgColor={"#7C4EE4"} />
        </div>
        <div onClick={toggleMenu} className="flex lg:hidden cursor-pointer">
          {visible ? <X size={24} /> : <Menu size={24} />}
        </div>
      </motion.div>

      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-end"
          >
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#7f61c4] py-28 text-center flex flex-col gap-3 rounded-l-lg w-[75%] max-w-xs h-full"
            >
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;