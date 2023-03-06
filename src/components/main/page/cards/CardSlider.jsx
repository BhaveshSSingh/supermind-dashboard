import "./slider.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import paypalLogo from "../../../../assets/paypal-logo.png";
import masterCardLogo from "../../../../assets/Master-Card-logo.png";
import webMoneyLogo from "../../../../assets/webmoney-logo.png";
import qiwiLogo from "../../../../assets/qiwi-logo.png";
import transferWiseLogo from "../../../../assets/wise-transferwise-logo.png";
import { useState } from "react";

const CardSlider = () => {
  let box = document.querySelector(".card__container");

  const [state, setState] = useState(0);

  const btnPressPrev = () => {
    setState(state + 1);
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  };
  const btnPressNext = () => {
    setState(state + 1);
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  };

  return (
    <div className="cardSlider">
      <button className="pre-btn" onClick={btnPressPrev}>
        <MdKeyboardArrowLeft size={30} />
      </button>
      <button className="next-btn" onClick={btnPressNext}>
        <MdKeyboardArrowRight size={30} />
      </button>

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

        <div className="card">
          <div className="card__data">
            <p className="card__data__brand">Qiwi</p>
            <p className="card__data__percent">1-5%</p>
          </div>
          <div className="card__logo">
            <img
              src={qiwiLogo}
              alt="payment-logo"
              className="card__logo__icon"
            />
          </div>
        </div>
        <div className="card">
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
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
