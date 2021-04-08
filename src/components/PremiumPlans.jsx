import React from "react";
import "./PremiumPlans.css";

const PremiumPlans = (props) => {
  const items = [].concat(props.items);
  console.log(items);
  return (
    <div className="plan">
      <div className="sectOne">
        <p className="header1">{props.header}</p>
        <p className="header2">{props.header2}</p>
        <h3 className="type">{props.type}</h3>
        <p className="amount">GHC {props.amount} /month after offer period</p>
        <p className="accounts">{props.accounts} </p>
      </div>

      <hr className="planhr" />
      <div className="sectTwo">
        <ul className="planItems">
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <div className="sectThree"></div>
      <button className="planButton">Get Started</button>
      <p className="terms">{props.terms}</p>
    </div>
  );
};

export default PremiumPlans;
