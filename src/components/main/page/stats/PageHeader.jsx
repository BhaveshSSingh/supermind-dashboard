import { VscBellDot } from "react-icons/vsc";

const PageHeader = () => {
  return (
    <>
      <div className="pageHeader">
        <h2>Balance</h2>

        <div className="pageHeader__icons">
          <div className="pageHeader__icons_notification">
            <VscBellDot size={30} />
          </div>
          <div className="pageHeader__icons__img">
            <img
              src="https://api.dicebear.com/5.x/adventurer/svg?seed=Angel"
              alt="profile"
              className="pageHeader__icons__profile"
            />
          </div>
        </div>
      </div>
      <div className="border" />
    </>
  );
};

export default PageHeader;
