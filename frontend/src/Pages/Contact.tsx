import Form from "../components/Form";
import {motion} from "framer-motion"

const Contact: React.FC = () => {
  return (
      <motion.div initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0.5}}
      transition={{duration:0.01 }}
      className="pt-[6rem]  md:pt-[5rem] min-h-screen flex justify-center items-center bg-slate-900">
        <div className="w-full max-w-4xl px-4 md:px-8">
          <Form />
        </div>
      </motion.div>
  );
};

export default Contact;
