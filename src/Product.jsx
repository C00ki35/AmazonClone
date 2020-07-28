import React from "react";
import "./css/Product.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

const Product = ({ id, item, price, rating, image, quantity }) => {
  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: { id, item, price, image, rating, quantity },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        {item}
        <div className="product__price">
          <small>£</small>
          <strong>{price}</strong>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_) => {
                return (
                  <span role="img" aria-label="stars" style={{ fontSize: 10 }}>
                    ⭐️
                  </span>
                );
              })}
          </div>
        </div>
        <div>
          <Link
            to={{
              pathname: `/productinfo/:${id}`,
            }}
          >
            <img className="product__image" src={image} alt={item} />
          </Link>
        </div>
        <div className="product__buyButton">
          <button
            onClick={() => {
              addToBasket();
            }}
          >
            Add to basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
