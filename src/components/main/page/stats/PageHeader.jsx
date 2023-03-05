import { VscBellDot } from "react-icons/vsc";
import avatar from "../../../../assets/avatar.jpg";

const PageHeader = () => {
  return (
    <>
      <div className="pageHeader">
        <h2>Balance</h2>

        <div className="pageHeader__icons">
          <div className="pageHeader__icons_notification">
            <VscBellDot size={30} />
          </div>
          <div className="pageHeader__icons__profile">
            <img src={avatar} alt="profile" />
          </div>
        </div>
      </div>
      <div className="border" />
    </>
  );
};

export default PageHeader;
