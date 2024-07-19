import "./Main.css";
import { CgProfile } from "react-icons/cg";
import { FaCompass } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaRegMessage } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <CgProfile size={30} />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Dev</span>
            <p>How can I help today?</p>
          </p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautifull places to see on an upcoming road trip</p>
            <FaCompass />
          </div>
          <div className="card">
            <p>Briefly summarize this concept : urban planning</p>
            <HiOutlineLightBulb />
          </div>
          <div className="card">
            <p>Brainstorm team building activities for work treate</p>
            <FaRegMessage />
          </div>
          <div className="card">
            <p>Improve the readablity of following code</p>
            <FaCode />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
