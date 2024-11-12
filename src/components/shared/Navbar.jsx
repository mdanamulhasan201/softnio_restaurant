import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from '../../assets/img/navbar/Logo.png';
import './style.css';
import log from '../../assets/img/navbar/Group.png'
import Button from "../button/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const navLinks = ["Home", "About", "Portfolio", "Clients", "Blog", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gradient' : 'bg-transparent'}`}>
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left Side: Logo & Links */}
        <div className="flex items-center gap-32 lg:gap-44">
          <Link to="/" className="h-[37px] w-10 z-50 flex items-center gap-1">
            <img src={log} alt="Logo" />
            <span className="text-white font-strong text-[28px] md:text-xl lg:text-[28px] ">Restaurant</span>
          </Link>
          <ul className="hidden md:flex items-center gap-5 lg:gap-8 ">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={`/${link.toLowerCase()}`}
                  className={`text-white font-raleway font-balanced transition-colors ${location.pathname === `/${link.toLowerCase()}` ? 'text-yellow-500 font-bold' : ''
                    }`}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Button */}
        <div className="hidden md:block">
          <Button text="Book a Table" />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden z-50">
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close-icon"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.3 }}
              >
                <AiOutlineClose
                  onClick={closeSidebar}
                  className="text-2xl cursor-pointer text-white"
                />
              </motion.div>
            ) : (
              <motion.div
                key="menu-icon"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <AiOutlineMenu
                  onClick={toggleSidebar}
                  className="text-2xl cursor-pointer text-white"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Full-Screen Sidebar with Smooth Opening and Content Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-full bg-gradient shadow-lg z-40"
          >
            <ul className="p-6 space-y-6 mt-20 flex flex-col items-start justify-start">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{
                    delay: index * 0.1 + 0.3,
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                >
                  <Link
                    to={`/${link.toLowerCase()}`}
                    className={`block text-lg transition font-raleway font-balanced ${location.pathname === `/${link.toLowerCase()}` ? 'text-yellow-500 font-bold' : 'text-white hover:text-yellow-500'
                      }`}
                    onClick={closeSidebar}
                  >
                    {link}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Sidebar Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="px-6 mt-10"
            >
              <div className="w-full">
                <Button text="Book a Table" fullWidth={true} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
