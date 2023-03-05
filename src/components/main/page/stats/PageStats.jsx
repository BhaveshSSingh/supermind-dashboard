import { IoIosArrowDropdown } from "react-icons/io";
import PageHeader from "./PageHeader";
import "./pageStats.css";

const PageStats = () => {
  return (
    <div className="pageStats">
      <div>
        <PageHeader />
        <div className="pageStats__options">
          <h4>Daily balance overview</h4>
          <div>
            <span class="dot_aqua" />
            <span>Spent</span>
            <span class="dot_purple" />

            <span>Referral</span>
            <span>14 days</span>
            <IoIosArrowDropdown />
          </div>
        </div>
        {/*  */}

        <div>Graphs</div>
      </div>

      <div className="pageStats__balance">
        <h4>Balance statistic</h4>
        <div>Piechart</div>

        <div className="pageStats__data">
          <div>
            <span class="dot_aqua" />
            <span>Spent</span>
            <span class="dot_purple" />

            <span>Referral</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageStats;
