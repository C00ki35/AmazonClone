import React from "react";
import "./css/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { basketTotal } from "./reducer";

const Subtotal = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(text) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{`${text}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={basketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"£"}
      />
      <button className="subtotal__button">Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
