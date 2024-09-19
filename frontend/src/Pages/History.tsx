import Achieve from "../components/Achieve"
import {motion} from "framer-motion"
const data = [
    { number: 4, text: "Cups Won" },
    { number: 10, text: "Projects Completed" },
    { number: 4, text: "Cups Won" },
    { number: 10, text: "Projects Completed" },
    { number: 4, text: "Cups Won" },
    { number: 10, text: "Projects Completed" }
  ];
const History = () => {
  return (
    <motion.div  initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:2 }}
    className=""> 
      <Achieve boxes={data}/>
    </motion.div>
  )
}

export default History
