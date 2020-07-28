import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./css/Login.css";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  // const addSomething = () => {
  //   db.collection("shop-products")
  //     .doc("Test")
  //     .set({
  //       name: "Los Angeles",
  //       state: "CA",
  //       country: "USA",
  //     })
  //     .then(function () {
  //       console.log("Document successfully written!");
  //     })
  //     .catch(function (error) {
  //       console.log("Not working");
  //       //console.error("Error writing document: ", error);
  //     });
  // };

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://www.kindpng.com/picc/m/1-11909_amazon-logo-png-transparent-background-company-logos-png.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button onClick={register} className="login__createAccountButton">
          Create your Amazon Account
        </button>

        {/* <button onClick={addSomething} className="login__createAccountButton">
          Add to database
        </button> */}
      </div>
    </div>
  );
};

export default Login;
