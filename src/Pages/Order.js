import React from "react";
import logo from "../Assests/logo1.png";
import footSafe from "../Assests/footSafe.png";
import footBag from "../Assests/footBag.png";
import footraz from "../Assests/footrazorpay.png";
// import { useParams } from "react-router";
import Cookies from "js-cookie";
import Login from "../Components/Login";
import { useEffect, useState } from "react";

import "./Order.css";
import PaymentCard from "../Components/PaymentCard";
import SignUp from "../Components/SignUp";
import Navbar from "../Components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

const Order = () => {
  const [slug, setSlug] = useState(Cookies.get("slug") || "uiux");
  const [showLogin, setShowLogin] = useState(false);

  const [showSign, setShowSign] = useState(false);
  const name = Cookies.get("user_name");
  const email = Cookies.get("user_email");
  const [bought, setBought] = useState(Cookies.get("bought") || false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const slugValue = queryParams.get("slug");
    if (slugValue) {
      setSlug(slugValue);
      Cookies.set("slug", slugValue);
      navigate("/payment");
    }
  }, [location.search,navigate]);

  

  useEffect(() => {
    const email = Cookies.get("user_email") || null;
    const name = Cookies.get("user_name") || null;
    if (!email || !name) {
      setShowLogin(true);
      return;
    }
    if (bought) {
      window.location.href = "https://upskill.tutedude.com/dashboard";
    }
  }, [bought]);

  const ids = [
    // "mernstack",
    // "webdevelopment",
    // "appdevelopment",
    // "ethicalhacking",
    // "java",
    // "python",
    // "cpp",
    // "datastructure",
    // "competitiveprogramming",
    // "aftereffects",
    // "photoshop",
    // "premierepro",
    // "digitalmarketing",
    // "fundamentalanalysis",
    // "technicalanalysis",
    // "illustrator",
    // "financialmodelling",
    // "datascience",
    "uiux",
    // "reactnative",
    // "riskmanagement",
    // "dbms",
    // "devops",
    // "reactjs"
]

if (!ids.includes(slug)) {
  Cookies.remove('slug')
    alert("wrong URL!!!");
    window.location.href = "https://tutedude.com"
}

  if (showLogin)
    return (
      <>
        <Navbar setShowLogin={setShowLogin} setShowSign={setShowSign} />
        <Login
          setBought={setBought}
          closeCross={false}
          setShowLogin={setShowLogin}
          setShowSign={setShowSign}
        />
      </>
    );

  if (showSign)
    return (
      <>
        <Navbar setShowLogin={setShowLogin} setShowSign={setShowSign} />
        <SignUp
          closeCross={false}
          setShowSign={setShowSign}
          setShowLogin={setShowLogin}
        />
      </>
    );

  return (
    <div className="order-cont">
      <div className="order-logo-cont">
        <img src={logo} className="logoimg" alt="logo" />
      </div>
      <div className="order-last-cont">
        <div className="order-head-cont">
          <div className="order-head">Purchase Summary</div>
        </div>
        <div className="order-main-cont">
          <div className="order-left-cont">
            <div className="order-left-head-cont">
              <div className="order-left-head-subcont">
                <div className="order-left-cp">{slug === 'uiux'?"UI/UX" : slug}</div>
                <div className="order-left-ch">with 100% refund</div>
              </div>
              {/* <div className='order-left-str'><s>₹3495</s><span className='order-right-amt'>  ₹ 1874</span></div> */}
              <div className="order-left-str">
                <span className="order-right-amt"> ₹ 699</span>
              </div>
            </div>
            <div className="coupon-cont">
              <div className="pc-coupon-cont">
                <div className="applied">
                  <span>Applied</span>
                </div>
                <div className="coupon-details">
                  <div className="cpn-det-head">FEESBACK</div>
                  <div className="cpn-det-warn">for limited period only</div>
                  <div className="cpn-det-text">
                    You are now elligible for getting 100% of your enrollment
                    fee back on your course completion.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-right-cont">
            <PaymentCard slug="uiux" name={name} email={email} />
          </div>
        </div>
      </div>
      <div className="order-footer-cont">
        <div className="order-footer-div">
          <img src={footSafe} alt="footersafe" />
          <div className="foot-ord-safe">100% safe and secure</div>
        </div>
        <div className="order-footer-div">
          <img src={footBag} alt="footersafe" />
          <div className="order-footer-safe-inner-div">
            <div className="order-footer-secure">SECURE</div>
            <div className="order-footer-ssl">SSL ENCRYPTION</div>
          </div>
        </div>
        <div className="order-footer-rzp">
          <img src={footraz} alt="razorpay"></img>
        </div>
      </div>
    </div>
  );
};

export default Order;
