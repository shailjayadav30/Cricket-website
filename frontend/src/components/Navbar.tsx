import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

interface NavItem {
  id: number;
  title: string;
  Path: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navitems: NavItem[] = [
    {
      id: 0,
      title: "Home",
      Path: "/",
    },
    {
      id: 2,
      title: "About",
      Path: "/about",
    },
    {
      id: 1,
      title: "Tournaments",
      Path: "/tornaments",
    },
    {
      id: 2,
      title: "Contact",
      Path: "/contact",
    },
    
  ];

  return (
    <div>
      {/* Navbar Container */}
      <div className="pl-4 pr-4 h-[6rem] absolute top-0 left-0 right-0 bg-transparent flex justify-between items-center z-10">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-[4rem] w-[4rem] rounded-[50%]" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex text-white gap-4 items-center justify-end">
            {navitems.map((item) => (
              <li key={item.id}>
                <Link to={item.Path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-4xl   focus:outline-none"
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
            {/* Navigation Items */}
            <ul className="flex text-white gap-4 items-center flex-col justify-center h-full ">
              {navitems.map((item) => (
                <li key={item.id}>
                  <Link to={item.Path} onClick={() => setIsOpen(false)}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
