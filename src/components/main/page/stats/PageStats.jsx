import { RiArrowDownSFill } from "react-icons/ri";
import BarChart from "./BarChart";
import PageHeader from "./PageHeader";
import "./pageStats.css";
import PieChart from "./PieChart";

const PageStats = () => {
  return (
    <div className="pageStats">
      <div>
        <PageHeader />
        <div className="pageStats__options">
          <h4 className="pageStats__options__text">Daily balance overview</h4>
          <div className="pageStats__overview">
            <span class="dot_aqua" />
            <span>Spent</span>
            <span class="dot_purple" />
            <span>Referral</span>

            <div className="pageStats__overview__options">
              <div>14 days</div>
              <RiArrowDownSFill
                className="pageStats__overview__options__icon"
                size={17}
              />
            </div>
          </div>
        </div>

        <div className="barChart__container">
          <BarChart />
        </div>
      </div>

      <div className="pageStats__balance">
        <h4>Balance statistic</h4>
        <PieChart />
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
