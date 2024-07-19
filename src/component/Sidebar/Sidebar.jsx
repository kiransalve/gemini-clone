import { IoIosMenu } from "react-icons/io";
import "./Sidebar.css";
import { FaPlus } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { useState } from "react";

const Sidebar = () => {
  const [extended, setExtended] = useState(true);

  return (
    <div className="sidebar">
      <div className="top">
        <IoIosMenu
          size={24}
          className="menu"
          onClick={() => setExtended(!extended)}
        />
        <div className="new-chat">
          <FaPlus size={24} />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended && (
          <>
            <div className="recent">
              <p className="recent-title">Recent</p>
              <div className="recent-entry">
                <MdMessage size={24} />
                <p>What is react ... </p>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <FaQuestion size={24} />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <MdHistory size={24} />
          {extended && <p>History</p>}
        </div>
        <div className="bottom-item recent-entry">
          <IoIosSettings size={24} />
          {extended && <p>Setting</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
