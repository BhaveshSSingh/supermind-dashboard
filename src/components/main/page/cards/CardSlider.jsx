import "./slider.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import { useEffect, useState } from "react";
import { cardData } from "../../../../config";

const CardSlider = () => {
  let box = document.querySelector(".card__container");

  const [state, setState] = useState(0);

  useEffect(() => {
    setState(state + 1);
  }, []);

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
        {cardData.map((data) => (
          <div className="card">
            <div className="card__data">
              <p className="card__data__brand">{data.name}</p>
              <p className="card__data__percent">{data.percent}</p>
            </div>
            <div className="card__logo">
              <img
                src={data.img}
                alt="payment-logo"
                className="card__logo__icon"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
