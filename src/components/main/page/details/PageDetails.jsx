import "./pageDetails.css";
import PageIncome from "./PageIncome";
import paypalLogo from "../../../../assets/paypal-logo.png";
import masterCardLogo from "../../../../assets/Master-Card-logo.png";
import webMoneyLogo from "../../../../assets/webmoney-logo.png";
import qiwiLogo from "../../../../assets/qiwi-logo.png";
import transferWiseLogo from "../../../../assets/wise-transferwise-logo.png";

const PageDetails = () => {
  return (
    <>
      {/* <div className="pageDetails"> */}
      <div className="details">
        <div>
          <h3>Transactions</h3>
          <div className="details__time">
            <h4>Today</h4>
            <h4>This Week</h4>
            <h4>This Month</h4>
          </div>
        </div>
      </div>
      <div>
        {/* table */}
        <div className="table__row">
          <p>Data and time</p>
          <p>Payment method</p>
          <p>Status</p>
          <p>Amount($)</p>
        </div>

        <div className="table__row">
          <p>17 Feb 2020, 16:30</p>
          <p>
            <img src={masterCardLogo} alt="logo" className="card__logo__icon" />
            Mastercard
          </p>
          <p>Pending</p>
          <p>-400.00$</p>
        </div>
        {/*  */}
        <div className="table__row">
          <p>14 Feb 2020, 12:39</p>
          <p>
            <img src={paypalLogo} alt="logo" className="card__logo__icon" />
            PayPal
          </p>
          <p>Pending</p>
          <p>-250.00$</p>
        </div>
        {/*  */}
        <div className="table__row">
          <p>12 Feb 2020, 09:45</p>
          <p>
            <img src={qiwiLogo} alt="logo" className="card__logo__icon" />
            Qiwi
          </p>
          <p>Done</p>
          <p>+1000.00$</p>
        </div>
        {/*  */}
        <div className="table__row">
          <p>10 Feb 2020, 12:39</p>
          <p>
            <img src={webMoneyLogo} alt="logo" className="card__logo__icon" />
            Webmoney
          </p>
          <p>Pending</p>
          <p>-250.00$</p>
        </div>
      </div>
      <PageIncome />
    </>
  );
};

export default PageDetails;
