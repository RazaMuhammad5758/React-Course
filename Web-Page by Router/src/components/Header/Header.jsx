import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src="images/logo.png" width="125px" />
        </div>
        <nav>
          <ul id="menuitems">
            <li>
              <button className="btn-31" style={{width:'100%', height:'30px'}}>
                <span className="text-container">
                  <span className="text">Home</span>
                </span>
              </button>
            </li>
            <li>
              <button className="btn-31">
                <span className="text-container">
                  <span className="text">Services</span>
                </span>
              </button>
            </li>
            <li>
              <button className="btn-31">
                <span className="text-container">
                  <span className="text">Products</span>
                </span>
              </button>
            </li>
            <li>
              <button className="btn-31">
                <span className="text-container">
                  <span className="text">Offer</span>
                </span>
              </button>
            </li>
          </ul>
        </nav>
        <img src="images/cart.png" width="30px" height="30px" alt="" />
      </div>
    </div>
  );
};

export default Header;
