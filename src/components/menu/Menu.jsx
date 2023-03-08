import { appName } from "../../config";
import "./Menu.css";
import {
  HiOutlineLink,
  HiOutlineSpeakerphone,
  HiPaperAirplane,
} from "react-icons/hi";
import logo from "../../assets/helpcenter.svg";
import { SiTraefikproxy } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { CgNotes } from "react-icons/cg";

const Menu = () => {
  return (
    <div class="menu">
      <h1 className="menu_header">
        <span className="menu_header_text">
          <HiPaperAirplane
            size={28}
            color="#89CFF0"
            className="menu_header_logo"
          />
          {appName}
        </span>
      </h1>
      <div className="menu__border" />

      <h5 className="menu__option__title"> MANAGE</h5>
      <a className="menu__option" href="#proxy" id="proxy">
        <SiTraefikproxy color="var(--light-blue)" />
        <span className="menu__options__name ">Proxy</span>
      </a>
      <a href="#balance" id="balance">
        <HiOutlineBanknotes color="var(--light-blue)" />
        <span className="menu__options__name ">Balance</span>
      </a>
      <a href="#online" id="online">
        <BsGlobe color="var(--light-blue)" />
        <span className="menu__options__name ">Online check</span>
      </a>
      <a href="#affiliate" id="affiliate">
        <HiOutlineLink color="var(--light-blue)" />
        <span className="menu__options__name ">Affiliate system</span>
      </a>

      {/*  */}
      <h5 className="menu__option__title"> SUPPORT</h5>
      <a className="menu__option" href="#tickets" id="tickets">
        <CgNotes color="var(--light-blue)" />
        <span className="menu__options__name ">Tickets</span>
      </a>
      <a href="#faq" id="faq">
        <HiOutlineSpeakerphone color="var(--light-blue)" />
        <span className="menu__options__name ">FAQ</span>
      </a>

      <img className="menu__image" src={logo} alt="help center image" />
    </div>
  );
};

export default Menu;
