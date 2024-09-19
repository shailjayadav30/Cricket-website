import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";

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

  return (
    <div className="z-10">
      {/* Navbar Container */}
      <div className=" pl-4 pr-4 h-[6rem] fixed top-0 left-0 right-0 backdrop-blur-md flex justify-end items-center z-10">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex text-white gap-4 items-center justify-end">
            <button onClick={() => handleScroll("home")}>Home</button>
            <button onClick={() => handleScroll("about")}>About</button>
            <button onClick={() => handleScroll("tournaments")}>Tournaments</button>
            <button onClick={() => navigate("/contact")}>Contact</button>
            <button onClick={() => navigate("/history")}>Achievements</button>
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
        <div className="md:hidden bg-blue-400 fixed top-0 left-0 w-full h-full z-20">
          <nav className="relative h-full">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-7 right-4 text-white text-4xl focus:outline-none"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <ul className="flex flex-col items-center justify-center h-full space-y-8 text-white text-2xl">
              <button onClick={() => handleScroll("home")}>Home</button>
              <button onClick={() => handleScroll("about")}>About</button>
              <button onClick={() => handleScroll("tournaments")}>Tournaments</button>
              <button onClick={() => navigate("/contact")}>Contact</button>
              <button onClick={() => navigate("/history")}>Achievements</button>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
