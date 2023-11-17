import React from "react";
import "./IntroHero.css";
import arrow from "../../Assests/arrow.svg";
import star from "../../Assests/star.png";
import learners from "../../Assests/learners.png";
import payment from "../../Assests/payment.png";
import anyone from "../../Assests/anyone.png";
import language from "../../Assests/language.png";
import duration from "../../Assests/duration.png";
import recorded from "../../Assests/recorded.png";
import Lifetime from "../../Assests/courseaccess.svg";
import { useParams } from "react-router-dom";

const IntroHero = ({ bought,name,setShowSign }) => {
  const { slug } = useParams();
 
  return (
    <div className="ihero-cont">
      <div className="ihero-main-cont">
        <div className="ihero-main-left">
          <div className="ihero-iit">An IIT Delhi Alumni Initiative</div>
          <div className="ihero-head-cont">
            <div className="ihero-head">
              Learn <b style={{ color: "#800080" }}>UI/UX Designing,</b> <br />{" "}
              effectively for <b style={{ color: "#800080" }}>FREE</b>
            </div>
            <div className="ihero-head-text">
              By getting <b>100%</b> of your <b>fees back</b> on course
              completion
            </div>
          </div>
          <div className="ihero-enroll-cont">
            <div className="ihero-amt-cont">
              <div className="ihero-amt">₹ 699</div>
              <div className="ihero-amt-text">
                Pay now & get it back on course completion
              </div>
            </div>
            {!bought && (
              name ? <a href={'payment'} className="ibtn-cont">
                <div className="ihero-enroll-btn">Enroll Now</div>
              </a> : 
                <div className="ihero-enroll-btn" onClick={()=>setShowSign(true)}>Enroll Now</div>
            )}
            {bought && (
              <a href="https://upskill.tutedude.com/dashboard" className="ibtn-cont">
                <div className="ihero-enroll-btn">Go To Dashboard</div>
              </a>
            )}
          </div>
        </div>
        <div className="ihero-main-right">
          <div className="ihero-flow-cont">
            <div className="ihero-right-flow">
              <img className="ihero-arrow" src={arrow} alt="Arrow" />
              Enroll
            </div>
            <div className="ihero-right-flow">
              <img className="ihero-arrow" src={arrow} alt="Arrow" />
              Upskill
            </div>
            <div className="ihero-right-flow">100% Refund</div>
          </div>
        </div>
      </div>
      <div className="ihero-round-cont">
        <div className="ihero-card-out-cont">
          <div className="ihero-card-cont">
            <div className="ihero-card-img-cont">
              <img src={star} alt="Stars"></img>
            </div>
            <div>
              <div className="ihero-card-head">4.9+</div>
              <div className="ihero-card-text">Rating</div>
            </div>
          </div>
        </div>
        <div className="ihero-card-out-cont">
          <div className="ihero-card-cont">
            <div className="ihero-card-img-cont">
              <img src={learners} alt="Learners"></img>
            </div>
            <div>
              <div className="ihero-card-head">5000+</div>
              <div className="ihero-card-text">Learners</div>
            </div>
          </div>
        </div>
        <div className="ihero-card-out-cont">
          <div className="ihero-card-cont">
            <div className="ihero-card-img-cont">
              <img src={payment} alt="Payment"></img>
            </div>
            <div>
              <div className="ihero-card-head">1 time </div>
              <div className="ihero-card-text">Payment</div>
            </div>
          </div>
        </div>
        <div className="ihero-card-out-cont">
          <div className="ihero-card-cont">
            <div className="ihero-card-img-cont">
              <img src={anyone} alt="Anyone"></img>
            </div>
            <div>
              <div className="ihero-card-head">Anyone</div>
              <div className="ihero-card-text">Can do(IT/NonIT)</div>
            </div>
          </div>
        </div>
        <div className="ihero-card-out-cont">
          <div className="ihero-card-cont">
            <div className="ihero-card-img-cont">
              <img src={language} alt="Language"></img>
            </div>
            <div>
              <div className="ihero-card-head">English</div>
              <div className="ihero-card-text">Language</div>
            </div>
          </div>
        </div>
        <div className="ihero-card-out-cont">
          <div className="ihero-card-cont">
            <div className="ihero-card-img-cont">
              <img src={duration} alt="Duration"></img>
            </div>
            <div>
              <div className="ihero-card-head">32Hrs</div>
              <div className="ihero-card-text">Duration</div>
            </div>
          </div>
        </div>
        <div className="ihero-card-out-cont">
          <div className="ihero-card-cont">
            <div className="ihero-card-img-cont">
              <img src={recorded} alt="recorded"></img>
            </div>
            <div>
              <div className="ihero-card-head">Self Paced</div>
              <div className="ihero-card-text">Recorded Lectures</div>
            </div>
          </div>
        </div>
        <div className="ihero-card-out-cont">
          <div className="ihero-card-cont">
            <div className="ihero-card-img-cont">
              <img src={Lifetime} alt="recorded"></img>
            </div>
            <div>
              <div className="ihero-card-head">Lifetime</div>
              <div className="ihero-card-text">Course Access</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroHero;
