import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutItem from "./CheckoutItem";
import "./css/Checkout.css";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          alt=""
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        ></img>
        {basket.length === 0 ? (
          <div>
            <h2>Your Amazon basket is empty</h2>
            <p>
              The price and availability of items at Amazon.co.uk are subject to
              change. The shopping basket is a temporary place to store a list
              of your items and reflects each item's most recent price.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your shopping basket</h2>
            {basket.map((product) => {
              return (
                <CheckoutItem
                  id={product.id}
                  item={product.item}
                  price={product.price}
                  image={product.image}
                  rating={product.rating}
                  quantity={product.quantity}
                />
              );
            })}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
