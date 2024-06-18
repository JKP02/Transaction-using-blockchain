import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from "react";
import Header from "./Header";
import Faucet from "./Faucet";
import Balance from "./Balance";
import Transfer from "./Transfer";
import './Navbar.css';
import Footer from './Footer';
import About from './About';
import "./App.css";
import Chat from './Chat'; 

function App() {

  return (
    <div id="screen">
      <Router>
        <div className='Navbar'>
          <span role="img" aria-label="tap emoji">🏦</span>
          <span className='HeadLogo'>TSEC Bank </span>
          <ul className="App-header">
            <li>
              <Link to="/">Home</Link>
            </li>
        
    <ul>
      <li className="dropdown">
        <span>SERVICES</span>
        <div className="dropdown-content">
          <Link to="/balance">Balance</Link>
          <Link to="/faucet">Loan</Link>
          <Link to="/transfer">Transfer</Link>
        </div>
      </li>
    </ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
            <Link to="/login" className="button">Login</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route exact path='/' element={< Header />}></Route>
          <Route exact path='/balance' element={< Balance />}></Route>
          <Route exact path='/faucet' element={< Faucet />}></Route>
          <Route exact path='/transfer' element={< Transfer />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/login' element={< About />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
      <Chat />
    </div>
    
  );
}

export default App;