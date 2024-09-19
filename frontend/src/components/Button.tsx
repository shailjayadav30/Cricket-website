import { useState } from "react";
import SplitStringRegexe from "../utils/SplitStringRegexe";
import "../utils/regex.css"
import {Link}  from "react-router-dom";
interface ButtonProps {
  text: string;
  to:string
}
const gettransformstyle=(isMouseEnter:boolean,index:number)=>({
  transform:`translateY(${isMouseEnter?"-100%":"0%"})`,
  transitionDelay:`${index*.02}s`,
})
const Button: React.FC<ButtonProps> = ({ text,to }) => {
  const [isMouseEnter, setisMouseEnter] = useState(false);

  return (
    <Link to="/ticketform"
      onMouseEnter={() => setisMouseEnter(true)}
      onMouseLeave={() => setisMouseEnter(false)}
      className="fancy-btn"
    >
      {/* Floating text animation */}
      <span className="fancy-btn-text-container">
        {SplitStringRegexe(text).map((character, index) => (
          <span 
            key={index}
            className="fancy-btn-char-container"
          >
<span style={gettransformstyle(isMouseEnter,index)}>{character}</span>
<span style={gettransformstyle(isMouseEnter,index)}>{character}</span>
          </span>
        ))}
      </span>
    </Link>
  );
};

export default Button;
