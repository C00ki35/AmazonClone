import React from "react";
import "./css/Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer__backToTop">
        <small>Back to top</small>
      </div>
      <div className="footer">
        <div className="footer__contacts">
          <strong>Get to Know Us</strong>
          <small>
            <p>Careers</p>
            <p>About Us</p>
            <p>UK Modern Slavery Statement</p>
            <p>Sustainability</p>
          </small>
        </div>
        <div className="footer__contacts">
          <strong>Make Money with Us</strong>
          <small>
            <p>Sell on Amazon</p>
            <p>Sell Under Private Brands</p>
            <p>Sell on Amazon Business</p>
            <p>Sell on Amazon Handmade</p>
            <p>Sell Your Services on Amazon</p>
            <p>Associates Programme</p>
            <p>Fulfilment by Amazon</p>
            <p>Seller Fulfilled Prime</p>
            <p>Advertise Your Products</p>
          </small>
        </div>
        <div className="footer__contacts">
          <strong>Amazon Payment Methods</strong>
          <small>
            <p>Amazon Platinum Mastercard</p>
            <p>Amazon Classic Mastercard</p>
            <p>Amazon Money Store</p>
            <p>Gift Cards</p>
            <p>Amazon Currency Converter</p>
            <p>Payment Methods Help</p>
            <p>Shop with Points</p>
            <p>Top Up Your Account</p>
            <p>Top Up Your Account in Store</p>
          </small>
        </div>
        <div className="footer__contacts">
          <strong>Let Us Help You</strong>
          <small>
            <p>COVID-19 and Amazon</p>
            <p>Track Packages or View Orders</p>
            <p>Delivery Rates & Policies</p>
            <p>Amazon Prime</p>
            <p>Returns & Replacements</p>
            <p>Recycling</p>
            <p>Manage Your Content and Devices</p>
            <p>Amazon Mobile App</p>
            <p>Amazon Assistant</p>
            <p>Customer Service</p>
          </small>
        </div>
      </div>
      <div className="footer__logo">
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
      </div>
    </>
  );
};

export default Footer;
