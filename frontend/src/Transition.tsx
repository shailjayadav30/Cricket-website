import { ComponentType } from "react";
import {motion} from "framer-motion"

const transition= (OgComponent:ComponentType):React.FC=>{
    return () =>(
        <>
        <OgComponent/>
        <motion.div className="slide-in"
        initial={{scaleY:0}}
        animate={{scaleY:0.5}}
        exit={{scaleY:0}}
        transition={{duration:0.3,ease:[0.22,1,0.36,1]}}
        />
        <motion.div className="slide-out"
        initial={{scaleY:0}}
        animate={{scaleY:1}}
        exit={{scaleY:0}}
        transition={{duration:0.3,ease:[0.22,1,0.36,1]}}/>
        </>
    )
}

export default transition