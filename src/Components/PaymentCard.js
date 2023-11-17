import React, { useState } from "react";
import "./PaymentCard.css";
import axios from "axios";
import logo from "../Assests/logo.png";
const PaymentCard = ({ slug, name, email }) => {
  // const [price, setPrice] = useState(699);
  const [discount, setDiscount] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [applied, setApplied] = useState(false);

  var coupons = {
    OFF200: 200,
    DevTest: 698,
    ANUDEEPA50: 300,
    NAVNEETA50: 300,
    MANTRA30: 200,
    GENERIC30: 300,
    HTA30: 300,
    EXCEL200: 200,
    SKILL100: 100,
    PREP200: 200,
    INFOHOOP: 200,
    HACK200: 200,
    TD100: 100,
    DUDE30: 200,
    Dude30: 200,
    dude30: 200,
    DUDE300: 300,
    JEET200: 200,
    SRMKZILLA: 300,
    DIWALI300: 300,
  };
  const feesback = ["3MONTHSREFUND", "3MONTHREFUND", "FEESBACK", "LEARNIT"];

  const handleInputChange = (e) => {
    setApplied(false);
    setDiscount(0);
    setCoupon(e.target.value);
  };
  const handleApply = () => {
    if (
      feesback.findIndex(
        (fees) => fees.toLocaleLowerCase() === coupon.toLocaleLowerCase()
      ) !== -1
    ) {
      alert(
        "Congrats! You are eligible to get 100% feesback on completing this course within 3 months :)"
      );
      setDiscount(0);
      setApplied(true);
    } else if (coupons[coupon]) {
      setDiscount(coupons[coupon]);
      setApplied(true);
    } else if (!coupons[coupon]) {
      alert("Please Enter a Valid Coupon");
      setDiscount(0);
    }
  };

  const checkoutHandler = async (amount, name, email, course, coupon) => {
    // const { data: { key } } = await axios.get("https://api.tutedude.com/lms/API/getkey")

    // const { data: { order } } = await axios.post("https://api.tutedude.com/lms/API/checkout", {
    const {
      data: { key },
    } = await axios.get("https://api.tutedude.com/lms/API/getkey");

    const {
      data: { order },
    } = await axios.post("https://api.tutedude.com/lms/API/checkout", {
      amount,
      name,
      email,
    });
    // console.log(order)

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "TuteDude",
      description: "TuteDude Course Purchase",
      image: logo,
      order_id: order.id,
      callback_url: `https://api.tutedude.com/lms/API/paymentverification?name=${name}&email=${email}&course=${course}&amount=${amount}&coupon=${coupon}`,
      prefill: {
        name,
        email,
      },
      notes: {
        name,
        email,
      },
      theme: {
        color: "#121212",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <div className="payment-card-cont">
      <div className="pc-inp-cont">
        <input
          type="text"
          placeholder="Apply Coupon Here"
          value={coupon}
          onChange={handleInputChange}
        />
        {!applied && (
          <button className="pc-inp-apply" onClick={handleApply}>
            Apply
          </button>
        )}
        {applied && (
          <button className="pc-inp-apply" type="disabled">
            Applied
          </button>
        )}
      </div>
      <div className="pc-bill-cont">
        <div className="bill-pay-info-cont">
          <div className="subt-cont">
            <div className="subt-text">Sub Total</div>
            <div className="subt-text">₹{699}</div>
          </div>
          <div className="subt-cont">
            <div className="disc-text">Discount</div>
            <div className="disc-text">{discount}</div>
          </div>
          <div className="subt-cont">
            <div className="disc-text">Promo Applied</div>
            <div className="disc-text">FEESBACK</div>
          </div>
          <div className="border-promo"></div>
          <div className="subt-cont">
            <div className="tot-text">Total</div>
            <div className="tot-text">₹ {699 - discount}</div>
          </div>
        </div>
        <button
          className="proceed-to-pay"
          onClick={() =>
            checkoutHandler(699 - discount, name, email, slug, coupon)
          }
        >
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default PaymentCard;
