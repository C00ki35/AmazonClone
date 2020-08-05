import React, { useEffect } from "react";
import "./css/Home.css";
import Product from "./Product";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  const [{ loaded, products }, dispatch] = useStateValue();
  let prods = [];
  useEffect(() => {
    const fetchProducts = async () => {
      const snapshot = await db.collection("shop-products").get();
      snapshot.forEach((doc) => {
        let productObject = { id: doc.id, ...doc.data() };
        prods.push(productObject);
      });
      console.dir(prods);
      console.log(
        prods.forEach((element) => {
          console.log(element);
        })
      );
    };

    fetchProducts().then((done) => {
      dispatch({
        type: "isLoaded",
        payload: { loaded: true, products: prods },
      });
    });
  }, [loaded]);

  return (
    <>
      {loaded && (
        <>
          <Carousel className="home__carousel">
            <Carousel.Item className="home__image">
              <img
                className="d-block w-100"
                src={
                  " https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_FT_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB409516238_.jpg"
                }
              />
            </Carousel.Item>
            <Carousel.Item className="home__image">
              <img
                className="d-block w-100"
                src={
                  "https://images-eu.ssl-images-amazon.com/images/G/02/Amazon-co-uk-hq/2018/img/Prime/XCM_Manual_1133281_gatewayRedesignAcq_1500x600_Prime_1133280_30free-1x_1534769204-jpg._CB484986347_.jpg"
                }
              />
            </Carousel.Item>
            <Carousel.Item className="home__image">
              <img
                className="d-block w-100"
                src={
                  "https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/MzI2YTgxMmEt/MzI2YTgxMmEt-ZDlmMDFkODct-w1500._CB409460579_.jpg"
                }
              />
            </Carousel.Item>
            <Carousel.Item className="home__image">
              <img
                className="d-block w-100"
                src={
                  "https://images-eu.ssl-images-amazon.com/images/G/02/AmazonMusic/2020/Programming/071020_TheSummerSessions/072420/UK-EN_071020_SummerSessions_ACQ_GW_Hero_D_1500x600_CV5._CB410756845_.jpg"
                }
              />
            </Carousel.Item>
          </Carousel>
          <div className="home">
            <div className="home__row">
              <Product
                id={products[0].id}
                item={products[0].item}
                image={products[0].image}
                price={products[0].price}
                rating={products[0].rating}
                quantity={products[0].quantity}
              />
              <Product
                id={products[1].id}
                item={products[1].item}
                image={products[1].image}
                price={products[1].price}
                rating={products[1].rating}
                quantity={products[1].quantity}
              />
              <Product
                id={products[5].id}
                item={products[5].item}
                image={products[5].image}
                price={products[5].price}
                rating={products[5].rating}
                quantity={products[5].quantity}
              />
              <Product
                id={products[6].id}
                item={products[6].item}
                image={products[6].image}
                price={products[6].price}
                rating={products[6].rating}
                quantity={products[6].quantity}
              />
            </div>
            <div className="home__row">
              <Product
                id={products[2].id}
                item={products[2].item}
                image={products[2].image}
                price={products[2].price}
                rating={products[2].rating}
                quantity={products[2].quantity}
              />
              <Product
                id={products[3].id}
                item={products[3].item}
                image={products[3].image}
                price={products[3].price}
                rating={products[3].rating}
                quantity={products[3].quantity}
              />
              <Product
                id={products[4].id}
                item={products[4].item}
                image={products[4].image}
                price={products[4].price}
                rating={products[4].rating}
                quantity={products[4].quantity}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
