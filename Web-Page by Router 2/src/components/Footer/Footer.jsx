import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='masla'>
      <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col1">
            <h3>Download Uor App</h3>
            <p>Download App for Android and ios mobile phone.</p>
            <div className="app-logo">
              <img src="/images/play-store.png" alt="" />
              <img src="/images/app-store.png" alt="" />
            </div>
          </div>
          <div className="footer-col2">
            <img src="/images/logo-white.png" />
            <p>
              Our purpose is to sustainabily make the pleasure and benifits of
              sports accessible to the many
            </p>
          </div>
          <div className="footer-col3">
            <h3>Useful Links</h3>
            <ul>
              <li>Coupons</li>
              <li>Blog Post</li>
              <li>Return Policy</li>
              <li>Join Affeliate</li>
            </ul>
          </div>
          <div className="footer-col4">
            <h3>Follow Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="copyright">Copyright 2023-RedStore</p>
      </div>
      </div>
    </div>
  )
}

export default Footer
