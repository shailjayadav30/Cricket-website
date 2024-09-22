import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (section: string) => {
    if (location.pathname !== "/") {
      // Navigate to home first, then scroll
      navigate("/", { replace: true });
      setTimeout(() => {
        scrollToSection(section);
      }, 0); // Wait for navigation to complete before scrolling
    } else {
      scrollToSection(section); // Directly scroll if already on home
    }
  };

  const scrollToSection = (section: string) => {
    const scroll = document.querySelector(`#${section}`);
    scroll?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const handleContactClick = () => {
    navigate("/contact");
    setIsOpen(false); // Close the mobile menu
  };

  const handlehistoryClick = () => {
    navigate("/history");
    setIsOpen(false); // Close the mobile menu
  };
 
  return (
    <div className="z-10">
      {/* Navbar Container */}
      <div className="pl-4 pr-4 h-[6rem] fixed top-0 left-0 right-0 backdrop-blur-md flex justify-end items-center z-10">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex text-[#FFFFFF]  gap-4 items-center justify-end">
            <button className="hover:text-[#3B82F6]" onClick={() => handleScroll("home")}>Home</button>
            <button className="hover:text-[#3B82F6]" onClick={() => handleScroll("about")}>About</button>
            <button className="hover:text-[#3B82F6]" onClick={() => handleScroll("tournaments")}>Tournaments</button>
            <button className="hover:text-[#3B82F6]" onClick={() => handleScroll("upcoming")}>Upcomings</button>
            <button className="hover:text-[#3B82F6]" onClick={handleContactClick}>Contact</button>
            <button className="hover:text-[#3B82F6]" onClick={handlehistoryClick}>Achievements</button>
           
          </ul>
        </nav>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-4xl focus:outline-none"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full z-20 bg-gradient-to-b from-blue-600 to-slate-900">
          <nav className="relative h-full">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-7 right-4 text-white text-4xl focus:outline-none transition-transform hover:scale-110"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <ul className="flex flex-col items-center justify-center h-full space-y-8 text-white text-2xl">
              <motion.button
                onClick={() => handleScroll("home")}
                whileHover={{ scale: 1.1 }}
                className="hover:text-blue-300 transition-all"
              >
                Home
              </motion.button>
              <motion.button
                onClick={() => handleScroll("about")}
                whileHover={{ scale: 1.1 }}
                className="hover:text-blue-300 transition-all"
              >
                About
              </motion.button>
              <motion.button
                onClick={() => handleScroll("tournaments")}
                whileHover={{ scale: 1.1 }}
                className="hover:text-blue-300 transition-all"
              >
                Tournaments
              </motion.button>
              <motion.button
           onClick={() => handleScroll("upcoming")}
                whileHover={{ scale: 1.1 }}
                className="hover:text-blue-300 transition-all"
              >
                Upcoming
              </motion.button>
              <motion.button
                onClick={handleContactClick}
                whileHover={{ scale: 1.1 }}
                className="hover:text-blue-300 transition-all"
              >
                Contact
              </motion.button>
              <motion.button
                onClick={handlehistoryClick}
                whileHover={{ scale: 1.1 }}
                className="hover:text-blue-300 transition-all"
              >
                Achievements
              </motion.button>

            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
