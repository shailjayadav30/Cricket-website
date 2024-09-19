import About from "./Pages/About";
import Home from "./Pages/Home";
import Tournaments from "./Pages/Tournaments";
import { motion } from "framer-motion";
import GotoTop from "./components/GotoTop";
import Footer from "./components/Footer";
const Scroll = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
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
      <Footer />
      <GotoTop />
    </motion.div>
  );
};

export default Scroll;
