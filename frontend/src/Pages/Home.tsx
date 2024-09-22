import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import banner from "../images/banner.png";
import Button from "../components/Button";
import { motion } from "framer-motion";
import "../App.css";

const Home = () => {
  const icons = [
    {
      id: 1,
      icon: faInstagram,
      hoverColor: 'hover:text-pink-600',  
      link: "https://www.instagram.com/"
    },
    {
      id: 2,
      icon: faTwitter,
      hoverColor: 'hover:text-blue-400',    
      link: "https://x.com/"
    },
    {
      id: 3,
      icon: faFacebook,
      hoverColor: 'hover:text-blue-900',   
      link: "https://www.facebook.com/"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      id="home"
      className="relative min-h-screen w-full flex items-center justify-between bg-slate-900"
      style={{ backgroundImage: `url(${banner})`, backgroundRepeat: "no-repeat", backgroundSize: "35rem", backgroundPosition: "center" }}
    >
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:items-start p-6 lg:p-12 text-center lg:text-left">
        <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
          Unleash the Power of the Pitch with Every Swing!
        </h1>
        <p className="text-white text-base md:text-lg lg:text-xl mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, deleniti.
        </p>
        <Button text="Book Ticket" to="/ticketform" /> {/* Pass the "to" prop here */}
      </div>
      <div className="text-white gap-4 pr-2 flex flex-col">
        {icons.map((item) => (
          <a key={item.id} href={item.link}>
            <FontAwesomeIcon
              icon={item.icon}
              className={`h-8 w-8 hover:translate-y-1 transition-transform duration-300 ease-in-out ${item.hoverColor}`}
            />
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default Home;
