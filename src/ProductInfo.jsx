import React from "react";
import { useStateValue } from "./StateProvider";
import { useParams } from "react-router-dom";
import "./css/ProductInfo.css";
import Divider from "@material-ui/core/Divider";
import { useEffect } from "react";
import { db } from "./firebase";

const ProductInfo = (props) => {
  const [{ viewedProduct, productLoading }, dispatch] = useStateValue();
  const { id } = useParams();

  const addToBasket = () => {
    const { id, item, price, image, rating, quantity } = viewedProduct[0];
    dispatch({
      type: "ADD_TO_BASKET",
      payload: { id, item, price, image, rating, quantity },
    });
  };

  let product = [];
  function setLoading() {
    dispatch({
      type: "productLoaded",
      payload: { productLoading: true },
    });
  }

  const getProduct = async (id) => {
    id = id.replace(":", "");
    const doc = await db.collection("shop-products").doc(id).get();
    if (!doc.exists) {
      console.log("No such document!");
    } else {
      product.push({ id, ...doc.data() });
    }
  };

  useEffect(() => {
    setLoading();
    getProduct(id).then((result) => {
      dispatch({
        type: "productLoaded",
        payload: { productLoading: false, viewedProduct: product },
      });
    });
  }, []);

  const today = new Date();
  const mlist = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      {productLoading ? (
        <div></div>
      ) : (
        <>
          <div className="productInfo__ad">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/02/UK-hq/2019/img/Giftcard/XCM_Manual_650x45_1204376_1204376_uk_bgc_uk_launch_landing_page_2_1576162815_png_LOWER_QL85_._CB444924334_.jpg"
              alt="Same money by clicking here"
            />
          </div>
          <div className="productInfo">
            <div className="productInfo__image">
              <img
                src={viewedProduct[0].image}
                alt={(viewedProduct[0].item, viewedProduct[0].price)}
              />
            </div>
            <div className="productInfo__info">
              <h3>{viewedProduct[0].item}</h3>
              <p>Brand: {viewedProduct[0].brand}</p>
              <div className="product__rating">
                Rating:
                {Array(viewedProduct[0].rating)
                  .fill()
                  .map((_) => {
                    return (
                      <span
                        role="img"
                        aria-label="stars"
                        style={{ fontSize: 10 }}
                      >
                        ⭐️
                      </span>
                    );
                  })}
              </div>
              <Divider />
              <div className="productInfo__price">
                <small>Price: £ </small>
                <p> {viewedProduct[0].price}</p>
              </div>
              <p>
                <strong>Details:</strong>
              </p>
              <p>
                <small>{viewedProduct[0].details}</small>
              </p>
            </div>
            <div className="productInfo__addtocart">
              <div className="productInfo__checkoutPrice">
                £{viewedProduct[0].price}
              </div>
              <p>
                <strong>FREE Delivery</strong>
              </p>
              <p>
                Delivery Details Arrives: {`${new Date().getDate() + 2} `}
                {`${mlist[today.getMonth()]}`}
                <p>
                  Details <strong>Fastest delivery:</strong> Tomorrow Order
                  within 7 hrs 21 mins Details
                </p>
                <p className="productInfo__stock">In Stock</p>
              </p>
              <button
                onClick={() => {
                  addToBasket();
                }}
              >
                Add to basket
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default ProductInfo;
