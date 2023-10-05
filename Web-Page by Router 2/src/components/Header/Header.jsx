import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src="images/logo.png" width="125px" />
        </div>
        <nav>
          <ul id="menuitems">
          
              <li><NavLink to='/' className={({isActive})=>
              
              `
              ${
                  isActive? "text-orange-500":
                  "text-black"
              }
              `
              
              }>Home</NavLink></li>
              <li><NavLink to='/services' className={({isActive})=>
              
              `
              ${
                  isActive? "text-orange-500":
                  "text-black"
              }
              `
              
              }>Services</NavLink></li>
              <li><NavLink to='/products' className={({isActive})=>
              
              `
              ${
                  isActive? "text-orange-500":
                  "text-black"
              }
              `
              
              }>Products</NavLink></li>
              <li><NavLink to='/offer' className={({isActive})=>
              
              `
              ${
                  isActive? "text-orange-500":
                  "text-black"
              }
              `
              
              }>Offer</NavLink></li>
          </ul>
       </nav>
        <img src="images/cart.png" width="30px" height="30px" alt="" />
      </div>
    </div>
  );
};

export default Header;
