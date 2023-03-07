import { appName } from "../../config";
import Options from "./Options";
import "./sidebar.css";
import { HiPaperAirplane } from "react-icons/hi";
import logo from "../../assets/helpcenter.svg";
// import logo2 from "../../assets/support2.avif";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="sidebar_header">
        <HiPaperAirplane
          size={28}
          color="#89CFF0"
          className="sidebar_header_logo"
        />
        <span className="sidebar_header_text">{appName}</span>
      </h1>
      <div className="border" />

      <Options />

      <img className="sidebar__image" src={logo} alt="help center image" />
    </div>
  );
};

export default Sidebar;
