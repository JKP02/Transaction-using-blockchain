import React, { useState } from "react";
import {token} from "../../../declarations/token";

function Faucet() {

const [isDisabled, setDisable] = useState(false);
const [buttonText , setText] = useState("Reedem Now") ;

  async function handleClick(event) {
    setDisable(true);
    const result = await token.payOut();
    setText(result) ;
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
        💰
        </span >
        Quick Personalized Loan
      </h2>
      <label>Get your first Quick Digital Loan ! Claim 10,000 TSEC Token to your account.</label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={isDisabled}>
          {buttonText}
        </button>
      </p>
    </div>
  ); 
}

export default Faucet;
