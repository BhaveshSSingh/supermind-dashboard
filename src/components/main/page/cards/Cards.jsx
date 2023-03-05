import paypalLogo from "../../../../assets/paypal-logo.png";
import masterCardLogo from "../../../../assets/Master-Card-logo.png";
import webMoneyLogo from "../../../../assets/webmoney-logo.png";
import qiwiLogo from "../../../../assets/qiwi-logo.png";
import transferWiseLogo from "../../../../assets/wise-transferwise-logo.png";

const Cards = () => {
  return (
    <div className="card__container">
      <div className="card">
        <div className="card__data">
          <p className="card__data__brand">PayPal</p>
          <p className="card__data__percent">1-5%</p>
        </div>
        <div className="card__logo">
          <img
            src={paypalLogo}
            alt="payment-logo"
            className="card__logo__icon"
          />
        </div>
      </div>

      {/*  */}
      <div className="card">
        <div className="card__data">
          <p className="card__data__brand">Mastercard</p>
          <p className="card__data__percent">1-5%</p>
        </div>
        <div className="card__logo">
          <img
            src={masterCardLogo}
            alt="payment-logo"
            className="card__logo__icon"
          />
        </div>
      </div>
      {/*  */}
      <div className="card">
        <div className="card__data">
          <p className="card__data__brand">Webmoney</p>
          <p className="card__data__percent">1-5%</p>
        </div>
        <div className="card__logo">
          <img
            src={webMoneyLogo}
            alt="payment-logo"
            className="card__logo__icon"
          />
        </div>
      </div>

      {/*  */}
      {/* <div className="card">
        <div className="card__data">
          <p className="card__data__brand">Qiwi</p>
          <p className="card__data__percent">1-5%</p>
        </div>
        <div className="card__logo">
          <img src={qiwiLogo} alt="payment-logo" className="card__logo__icon" />
        </div>
      </div> */}
      {/*  */}
      {/* <div className="card">
        <div className="card__data">
          <p className="card__data__brand">Transferwise</p>
          <p className="card__data__percent">1-5%</p>
        </div>
        <div className="card__logo">
          <img
            src={transferWiseLogo}
            alt="payment-logo"
            className="card__logo__icon"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Cards;
