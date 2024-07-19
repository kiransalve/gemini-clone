import "./Main.css";
import { CgProfile } from "react-icons/cg";
import { FaCompass } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaRegMessage } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { CiMicrophoneOn } from "react-icons/ci";
import { IoMdSend } from "react-icons/io";
import { useContext } from "react";
import { Context } from "../../context/context";

const cardsData = [
  {
    icon: <FaCompass size={28} />,
    prompt: "Suggest beautifull places to see on an upcoming road trip",
  },
  {
    icon: <HiOutlineLightBulb size={28} />,
    prompt: "Briefly summarize this concept : urban planning",
  },
  {
    icon: <FaRegMessage size={28} />,
    prompt: "Brainstorm team building activities for work treate",
  },
  {
    icon: <FaCode size={28} />,
    prompt: "Improve the readablity of following code",
  },
];
const Main = () => {
  const {
    input,
    setInput,
    prevPrompt,
    setPrevPrompt,
    onSent,
    recentInput,
    setRecentInput,
    showResult,
    setShowResult,
    resultData,
    loading,
  } = useContext(Context);
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
          {cardsData.map(({ icon, prompt, index }) => {
            return (
              <div className="card" key={index}>
                <p className="card-title">{prompt}</p>
                <div className="card-icon">{icon}</div>
              </div>
            );
          })}
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt here"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <div className="send-icon">
              <CiMicrophoneOn size={24} />
              <IoMdSend size={24} onClick={() => onSent()} />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate information, please double check its
            responses
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
