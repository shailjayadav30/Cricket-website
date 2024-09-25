import { motion } from "framer-motion";
import AnimatedPage from "../Animatepages";
import Button from "../components/Button";
import playerbg from "../images/playerbg.png";

const slideUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, duration: 0.4 },
  },
};

const About: React.FC = () => {
  return (
    <AnimatedPage>
      <div
        id="about"
        className="text-white bg-slate-900 min-h-screen w-full flex flex-col justify-center items-center"
      >

        <motion.div
          className="flex flex-col-reverse lg:flex-row lg:p-16 bg-gradient-to-b from-slate-900 to-gray-800 mb-8 w-full max-w-7xl"
          variants={slideUpVariants}
          initial="hidden"
          animate="visible"
        >

          <div className="flex flex-col justify-center lg:w-1/2 space-y-6 p-6 lg:p-12 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              We Help You Grow As A Team
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
              soluta ipsa delectus quisquam quia! Et nostrum debitis labore fugiat
              assumenda?
            </p>
            <div className="flex flex-row items-center space-x-4 justify-center lg:justify-start">
  <Button text="Start Grow" to="/contact" />
  <Button text="Learn More" to="/privacy" />
</div>
          </div>


          <div className="lg:w-1/2 flex justify-center items-center p-4 lg:p-0">
            <img
              src={playerbg}
              alt="Player Background"
              className="h-60 md:h-72 lg:h-80 xl:h-[30rem] w-auto object-contain"
            />
          </div>
        </motion.div>
      </div>
    </AnimatedPage>
  );
};

export default About;
