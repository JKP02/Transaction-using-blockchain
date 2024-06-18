import React from "react";
import { Link } from "react-router-dom";
import "./header.css";


function Header() {
  return (
    <div>
      <div className="bg">
        <h2 className="bgtext">Welcome to TSEC Bank</h2>
      </div>
      <div className='card'>
        <h1>Services</h1>
        <hr />
        <div className="card-item">

        {/* <div className="card-item-sub1">
          <div className="e-card-title">Loan </div>
        </div>
        <div className="e-card-content">
          JavaScript Succinctly was written to give readers an accurate, concise examination of JavaScript objects and their supporting nuances, such as complex values, primitive values, scope, inheritance, the head object, and more. </div>
      </div> */}

          <Link to="/faucet" style={{textDecoration:'none'}}><div className="card-item-sub1"></div><div className="text1">Loan</div></Link>
          <Link to="/balance" style={{textDecoration:'none'}}><div className="card-item-sub2"></div><div className="text1">Balance</div></Link>
          <Link to="/transfer" style={{textDecoration:'none'}}><div className="card-item-sub3"></div><div className="text1">Transfer</div></Link>
          <Link to="/" style={{textDecoration:'none'}}><div className="card-item-sub4"></div><div className="text1">Redeem</div></Link>
        </div>
      
      </div>
    </div>
  );
}

export default Header;