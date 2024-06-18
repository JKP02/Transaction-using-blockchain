import React, { useState } from "react";
import {Principal} from "@dfinity/principal";
import {token} from "../../../declarations/token";

function Transfer() {
  
  const [recipientId, setId] = useState("");
  const [amount,  setAmount] = useState("");
  const [isDisable , setDisable] = useState(false);
  const [feedback ,setFeedback] = useState("");
  const [isHidden , setHidden] = useState(true);

  async function handleClick() {
    setHidden(true);
    setDisable(true);
    const recipient = Principal.fromText(recipientId);
    const amountToTransfer = Number(amount);
    const result = await token.transfer(recipient , amountToTransfer) ;
    console.log(recipientId, amountToTransfer, feedback)
    setFeedback(result);
    setHidden(false);
    setDisable(false);
  }

  return (
    <div className="window white">
      <div className="transfer">
        <h3 style={{color:'white'}}>Please enter the account number of the reciever and the amount to be transfered<br/></h3>
        
        <fieldset>
          <legend style={{color:'white'}}>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={recipientId}
                onChange={(e) => setId(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend style={{color:'white'}}>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value) }
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick}
          disabled={isDisable}
           >
            Transfer
          </button>
        </p>
        <p hidden={isHidden}>{feedback}</p>
      </div>
    </div>
  );
}

export default Transfer;
