import About from "./Pages/About";
import Home from "./Pages/Home";
import Tournaments from "./Pages/Tournaments";
import { motion } from "framer-motion";
import GotoTop from "./components/GotoTop";
import Footer from "./components/Footer";
import UpcomingMatches from "./Pages/Upcomings";
const Scroll = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
    >
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="tournaments">
        <Tournaments />
      </section>
      <section id="upcoming">
        <UpcomingMatches/>
      </section>
      <Footer />
      <GotoTop />
    </motion.div>
  );
};

export default Scroll;
