import { BsBoxArrowInDownLeft, BsBoxArrowUpRight } from "react-icons/bs";

const PageIncome = () => {
  return (
    <div>
      <h3>Income/Expense</h3>

      <div>
        <div className="income__text">
          <BsBoxArrowUpRight color="white" className="boxArrowUp__icons" />
          <div className="income__text__details">
            <h4>$22,578.00</h4>
            <p> Total amount expense</p>
          </div>
        </div>
        <div className="income__text">
          <BsBoxArrowInDownLeft color="white" className="boxArrowDown__icons" />
          <div>
            <h4>$22,578.00</h4>
            <p> Total amount expense</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageIncome;
