import React from "react";
import "./css/CheckoutItem.css";
import Divider from "@material-ui/core/Divider";
import { useStateValue } from "./StateProvider";

const CheckoutItems = ({ id, item, image, price, rating, quantity }) => {
  const [, dispatch] = useStateValue();
  console.log("this", rating);
  const removeFromBasket = (id) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: { id },
    });
  };

  return (
    <>
      <Divider variant="middle" />
      <div className="checkoutProduct">
        <img className="checkoutProduct__image" src={image} alt={item} />
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{item}</p>
          <p className="checkoutProduct__price">
            <small>£</small>
            <strong>{price}</strong>
          </p>
          <p>Quantity: {quantity}</p>

          <div className="CheckoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_) => {
                return (
                  <span role="img" aria-label="stars">
                    ⭐️
                  </span>
                );
              })}
          </div>
          <button
            onClick={() => {
              removeFromBasket(id);
            }}
            className="checkoutProduct__button"
          >
            Remove from basket
          </button>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default CheckoutItems;
