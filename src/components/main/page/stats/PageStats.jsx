import { IoIosArrowDropdown } from "react-icons/io";
import PageHeader from "./PageHeader";
import "./pageStats.css";

const PageStats = () => {
  return (
    <div className="pageStats">
      <div>
        <PageHeader />
        <div>
          <h4>Daily balance overview</h4>

          <span>Spent</span>
          <span>Referral</span>
          <span>14 days</span>
          <IoIosArrowDropdown />
        </div>
        {/*  */}

        <div>Graphs</div>
      </div>

      <div className="pageStats__balance">
        <h4>Balance statistic</h4>
        <div>Piechart</div>

        <div className="pageStats__data">
          <h6>Spent</h6>
          <h6>Referral</h6>
        </div>
      </div>
    </div>
  );
};

export default PageStats;
