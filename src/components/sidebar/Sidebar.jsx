import { appName } from "../../config";
import Options from "./Options";
import "./sidebar.css";
import { HiPaperAirplane } from "react-icons/hi";
import logo from "../../assets/helpcenter.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="sidebar_header">
        <span className="sidebar_header_text">
          <HiPaperAirplane
            size={28}
            color="#89CFF0"
            className="sidebar_header_logo"
          />
          {appName}
        </span>
      </h1>
      <div className="border" />

      <Options />

      <img className="sidebar__image" src={logo} alt="help center image" />
    </div>
  );
};

export default Sidebar;
