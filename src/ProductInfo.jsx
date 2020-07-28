import React, { get } from "react";
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
    id = parseInt(id.replace(":", ""));

    const result = await db
      .collection("shop-products")
      .where("id", "==", id)
      .get();
    result.forEach((doc) => {
      product.push(doc.data());
    });
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
                    return <p>⭐️</p>;
                  })}
              </div>
              <Divider />
              <div className="productInfo__price">
                <small>Price: £ </small>
                <p> {viewedProduct[0].price}</p>
              </div>
            </div>
            <div className="productInfo__addtocart">
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
