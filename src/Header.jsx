import React from "react";
import "./css/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

const Header = () => {
  const [{ basket, user }] = useStateValue();
  let basketItemsTotal = 0;
  basket.forEach((item) => {
    basketItemsTotal += item.quantity;
  });

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon
          style={{ fontSize: 40 }}
          className="header__searchIcon"
        ></SearchIcon>
      </div>
      <div className="header__nav">
        <Link to={!user && "login"} onClick={login} className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello,{user?.email}</span>
            <span className="header__optionLineTwo">
              {!user ? "Sign in" : "Log out"}
            </span>
          </div>
        </Link>

        <Link className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">Orders</span>
          </div>
        </Link>

        <Link className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon style={{ fontSize: 35 }} />
            <span className="header__optionLineOneBasket header__basketCount">
              {basketItemsTotal}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
