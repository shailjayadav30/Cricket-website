import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock login state
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const user = {
    name: "shailja",
    email: "da1@gmail.com",
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (section: string) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => scrollToSection(section), 0);
    } else {
      scrollToSection(section);
    }
  };

  const scrollToSection = (section: string) => {
    const scroll = document.querySelector(`#${section}`);
    scroll?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const handleContactClick = () => {
    navigate("/contact");
    setIsOpen(false);
  };

  const handleHistoryClick = () => {
    navigate("/history");
    setIsOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="z-10">
      <div className="pl-4 pr-4 h-[6rem] fixed top-0 left-0 right-0 backdrop-blur-md flex justify-between items-center z-10">
        {/* Logo or App Name */}
        <div className="text-white font-bold text-xl">Logo</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-white">
          <button onClick={() => handleScroll("home")} className="hover:text-blue-400">Home</button>
          <button onClick={() => handleScroll("about")} className="hover:text-blue-400">About</button>
          <button onClick={() => handleScroll("tournaments")} className="hover:text-blue-400">Tournaments</button>
          <button onClick={() => handleScroll("upcoming")} className="hover:text-blue-400">Upcoming</button>
          <button onClick={handleContactClick} className="hover:text-blue-400">Contact</button>
          <button onClick={handleHistoryClick} className="hover:text-blue-400">Achievements</button>

          {!isLoggedIn ? (
            <>
              <button onClick={() => navigate("/login")} className="ml-4 text-blue-500  ">Login</button>
              <button onClick={() => navigate("/register")} className="text-blue-500  bg-white h-10 w-20 rounded">Register</button>
            </>
          ) : (
            <div className="relative">
              <button onClick={toggleDropdown} className="flex items-center gap-2 text-white hover:text-blue-400">
                <FontAwesomeIcon icon={faUser} />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded shadow-lg z-30">
                  <div className="px-4 py-2 border-b">
                    <p className="font-semibold text-black">{user.name}</p>
                    <p className="text-gray-500 text-sm">{user.email}</p>
                  </div>
                  <ul className="py-2">
                    <li><button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-black" onClick={() => navigate("/dashboard")}>Dashboard</button></li>
                    <li><button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-black" onClick={() => navigate("/profile")}>Profile</button></li>
                    <li><button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500" onClick={handleLogout}>Log out</button></li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </nav>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-4xl focus:outline-none">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full z-20 bg-gradient-to-b from-blue-600 to-slate-900">
          <nav className="relative h-full">
            <button onClick={() => setIsOpen(false)} className="absolute top-7 right-4 text-white text-4xl">
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <ul className="flex flex-col items-center justify-center h-full space-y-8 text-white text-2xl">
              <motion.button onClick={() => handleScroll("home")} whileHover={{ scale: 1.1 }} className="hover:text-blue-300">Home</motion.button>
              <motion.button onClick={() => handleScroll("about")} whileHover={{ scale: 1.1 }} className="hover:text-blue-300">About</motion.button>
              <motion.button onClick={() => handleScroll("tournaments")} whileHover={{ scale: 1.1 }} className="hover:text-blue-300">Tournaments</motion.button>
              <motion.button onClick={() => handleScroll("upcoming")} whileHover={{ scale: 1.1 }} className="hover:text-blue-300">Upcoming</motion.button>
              <motion.button onClick={handleContactClick} whileHover={{ scale: 1.1 }} className="hover:text-blue-300">Contact</motion.button>
              <motion.button onClick={handleHistoryClick} whileHover={{ scale: 1.1 }} className="hover:text-blue-300">Achievements</motion.button>

              {!isLoggedIn ? (
                <>
                  <motion.button onClick={() => navigate("/login")} whileHover={{ scale: 1.1 }} className="text-blue-300">Login</motion.button>
                  <motion.button onClick={() => navigate("/register")} whileHover={{ scale: 1.1 }} className="text-blue-300 bg-white h-10 w-20 rounded ">Register</motion.button>
                </>
              ) : (
                <>
                  <motion.p className="text-sm text-gray-300">{user.name}</motion.p>
                  <motion.p className="text-xs text-gray-400">{user.email}</motion.p>
                  <motion.button onClick={() => navigate("/dashboard")} whileHover={{ scale: 1.1 }} className="text-white hover:text-blue-300">Dashboard</motion.button>
                  <motion.button onClick={() => navigate("/profile")} whileHover={{ scale: 1.1 }} className="text-white hover:text-blue-300">Profile</motion.button>
                  <motion.button onClick={handleLogout} whileHover={{ scale: 1.1 }} className="text-red-400">Log out</motion.button>
                </>
              )}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
