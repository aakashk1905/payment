import React from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import './Mlogin.css'
// import { GoogleLogin } from '@react-oauth/google';
import logo from '../Assests/logo.png'
import cross from '../Assests/cross.svg'
import emailImg from '../Assests/email.svg'
import pass from '../Assests/pass.svg'
// import { jwtDecode } from "jwt-decode";

const Login = ({ setShowLogin, setShowSign, closeCross, setBought }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onLogin = (email, password) => {
    console.log("onLogin email = ", email);

    fetch("https://api.tutedude.com/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === "true" || data.success === true) {
          Cookies.set("user_email", email);
          Cookies.set("user_pass", password);

          if (data.dashboard.courses && data.dashboard.courses.includes("uiux")) {

            setBought(true);
            var expirationDate = new Date();
            expirationDate.setTime(expirationDate.getTime() + (1 * 60 * 60 * 1000));
            Cookies.set("bought", true, { expires: expirationDate });
          }
          Cookies.set("user_name", data.sName);
          setShowLogin(false);
        } else {
          if (password === "googlesignin") window.alert("No Account Found With this Google Account!!!! Please Sign Up First");
          else window.alert("Invalid Email or Password");
        }
      })
      .catch((err) => {
        console.log(err);
        window.alert("Something went wrong");
      });
  };

  const errorMessage = (error) => {
    console.log(error);
  };
  return (
    <div className="login-cont">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onLogin(email.trim(), password.trim());
        }}
        className="login-inner-cont"
      >
        {/* <div className="login-inner-cont"> */}

        <div className="l-logo-cont">
          <img src={logo} alt="logo" />
          {closeCross !== false && <div className="l-cross-cont" onClick={() => setShowLogin(false)}>
            <img src={cross} alt="cross" />
          </div>
          }
        </div>
        <div className="inp-cont">
          <img src={emailImg} className="inp-img" alt="Email" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="l-inp"
          />
        </div>
        <div className="inp-cont">
          <img className="inp-img" src={pass} alt="Email" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="l-inp"
          />
        </div>
        <button type="submit" className="l-btn">
          Login
        </button>
        <div className="l-new">New User? <b className="l-sign"
          onClick={() => {
            setShowLogin(false);
            setShowSign(true)
          }}>Sign Up</b></div>
        {/* </div> */}
      </form>
    </div>


  );
};

export default Login;