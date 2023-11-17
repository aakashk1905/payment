import React, { useState } from "react";
import "./IntroRefund.css";
import doubt1 from "../../Assests/doubts1.svg";
import doubt2 from "../../Assests/doubt2.svg";
import signup from "../../Assests/signup.svg";
import Carousel from "react-simply-carousel";
import { useParams } from "react-router-dom";
const IntroRefund = ({ bought,name,setShowSign }) => {
  const { slug } = useParams();
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <>
      <div className="irefund-cont">
        <div className="irefund-head">
          A limited seats opportunity{" "}
          <b style={{ color: "#800080" }}>Refund Offer</b>
        </div>

        <div className="irefund-parent iref-mob">
          <div style={{ padding: "20px 0" }}>
            <div className="irefund-step">
              <span className="irefund-number">1</span>
              <div>
                <h5>What is FeesBack ?</h5>
                <p>
                  A limited time opportunity for rewarding our learners to{" "}
                  <strong>upskill for free</strong>.
                </p>
              </div>
              <div className="irefund-price">
                <span>₹</span>
                <span>0</span>
                <span>Effective Fee</span>
              </div>
              <div className="irefund-tags">
                <span>1 : 1 Mentorship</span>
                <span>Certification</span>
              </div>
            </div>
          </div>
          <div style={{ padding: "20px 0" }}>
            <div className="irefund-step">
              <span className="irefund-number">2</span>
              <div>
                <h5>How it works ?</h5>
                <h4>Step 1 : Enroll</h4>
                <p>into your favourite courses</p>
              </div>
              <img src={signup} alt="" />
              <div className="irefund-tags">
                <span>Get Lifetime Course Access</span>
              </div>
            </div>
          </div>
          <div style={{ padding: "20px 0" }}>
            <div className="irefund-step">
              <span className="irefund-number">3</span>
              <div>
                <h5>How it works ?</h5>
                <h4>Step 2 : Complete Course</h4>
                <p>with shared curated assignments in</p>
              </div>
              <div className="irefund-price">
                <span></span>
                <span>3</span>
                <span>months time from the date of enrollment</span>
              </div>
              <div className="irefund-tags">
                <span>Free Unlimited Doubt Solving</span>
              </div>
            </div>
          </div>
          <div style={{ padding: "20px 0" }}>
            <div className="irefund-step">
              <span className="irefund-number">4</span>
              <div>
                <h5>How it works ?</h5>
                <h4>Step 3 : Refund Awarded</h4>
                <p>when you fulfil the previous criteria</p>
              </div>
              <div className="irefund-price">
                <span></span>
                <span>100%</span>
                <span>Enrollment Fee is refunded</span>
              </div>
              <div className="irefund-tags">
                <span>Assured Certification on Course Completion </span>
              </div>
            </div>
          </div>
        </div>

        <div className="irefund-parent iref-desk">
          <Carousel
            className="levelll"
            containerProps={{
              style: {
                width: "90vw",
                justifyContent: "center",
                userSelect: "none",
              },
            }}
            maxWidth={1000}
            preventScrollOnSwipe={false}
            swipeTreshold={60}
            activeSlideIndex={activeSlide}
            onRequestChange={setActiveSlide}
            forwardBtnProps={{
              children: ">",
              style: {
                width: 30,
                height: 30,
                minWidth: 30,
                alignSelf: "center",
                display: "none",
              },
            }}
            backwardBtnProps={{
              children: "<",
              style: {
                width: 60,
                height: 60,
                minWidth: 60,
                alignSelf: "center",
                display: "none",
              },
            }}
            dotsNav={{
              show: true,
              itemBtnProps: {
                style: {
                  color: "white",
                  aspectRatio: "1/1 !important",
                  height: 20,
                  width: 20,
                  padding: "0",
                  borderRadius: "50%",
                  margin: "20px 10px 10px 10px",
                  border: 0,
                },
              },
              activeItemBtnProps: {
                style: {
                  height: 20,
                  aspectRatio: "1/1 !important",
                  width: 20,
                  borderRadius: "50%",
                  border: 0,
                  margin: "20px 10px 10px 10px",
                  padding: "0",
                  background: "black",
                },
              },
            }}
            autoplay={true}
            autoplayDirection="forward"
            autoplayDelay={3000}
            itemsToShow={2}
            speed={400}
            centerMode
          >
            {/* <div className='irefund-card'>
            <div className='irefund-card-top-cont'>
              <div className='irefund-card-num-cont'>
                <div className='irefund-card-head1'>What is FeesBack ?</div>
                <div className='irefund-card-num'>1</div>
              </div>
              <div className='irefund-card-text'>A limited time opportunity for rewarding our learners to <b>upskill for free.</b></div>
            </div>

            <div className='irefund-mid-cont'>
              <div>₹0</div>
              <div>Effective Fee</div>
            </div>
            <div>
              <div>1 : 1 Mentorship</div>
              <div>Certification</div>
            </div>
          </div> */}

            <div style={{ padding: "20px" }}>
              <div className="irefund-step">
                <span className="irefund-number">1</span>
                <div>
                  <h5>What is FeesBack ?</h5>
                  <p>
                    A limited time opportunity for rewarding our learners to{" "}
                    <strong>upskill for free</strong>.
                  </p>
                </div>
                <div className="irefund-price">
                  <span>₹</span>
                  <span>0</span>
                  <span>Effective Fee</span>
                </div>
                <div className="irefund-tags">
                  <span>1 : 1 Mentorship</span>
                  <span>Certification</span>
                </div>
              </div>
            </div>
            <div style={{ padding: "20px" }}>
              <div className="irefund-step">
                <span className="irefund-number">2</span>
                <div>
                  <h5>How it works ?</h5>
                  <h4>Step 1 : Enroll</h4>
                  <p>into your favourite courses</p>
                </div>
                <img src={signup} alt="" />
                <div className="irefund-tags">
                  <span>Get Lifetime Course Access</span>
                </div>
              </div>
            </div>
            <div style={{ padding: "20px" }}>
              <div className="irefund-step">
                <span className="irefund-number">3</span>
                <div>
                  <h5>How it works ?</h5>
                  <h4>Step 2 : Complete Course</h4>
                  <p>with shared curated assignments in</p>
                </div>
                <div className="irefund-price">
                  <span></span>
                  <span>3</span>
                  <span>months time from the date of enrollment</span>
                </div>
                <div className="irefund-tags">
                  <span>Free Unlimited Doubt Solving</span>
                </div>
              </div>
            </div>
            <div style={{ padding: "20px" }}>
              <div className="irefund-step">
                <span className="irefund-number">4</span>
                <div>
                  <h5>How it works ?</h5>
                  <h4>Step 3 : Refund Awarded</h4>
                  <p>when you fulfil the previous criteria</p>
                </div>
                <div className="irefund-price">
                  <span></span>
                  <span>100%</span>
                  <span>Enrollment Fee is refunded</span>
                </div>
                <div className="irefund-tags">
                  <span>Assured Certification on Course Completion </span>
                </div>
              </div>
            </div>
          </Carousel>
        </div>

        {/* {!bought && <div style={{width:'75vw',display:'flex',justifyContent:'center',alignItems:'center'}}><a href={'payment'} ><div className='ihero-enroll-btn1'>Enroll Now</div></a> </div>} */}
        {!bought &&
          (name ? (
            <div style={{width:'75vw',display:'flex',justifyContent:'center',alignItems:'center'}}><a href={'payment'} className="ibtn-cont">
              <div className="ihero-enroll-btn1">Enroll Now</div>
            </a>
            </div>
          ) : (
            <div className="ihero-enroll-btn1" onClick={() => setShowSign(true)}>
              Enroll Now
            </div>
          ))}
        {bought && (
          <div
            style={{
              width: "75vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="https://upskill.tutedude.com/dashboard">
              <div className="ihero-enroll-btn1">Go To Dashboard</div>
            </a>
          </div>
        )}
      </div>
      <div className="idoubt-cont">
        <div className="idoubt-inner-cont">
          <div className="idoubnt-head">Instant Doubt Solving</div>
          <div className="idoubt-main-cont">
            <div className="idoubt-left">
              <div className="idoubt-img">
                <img src={doubt1} alt="doubt1" />{" "}
              </div>
              <div className="idoubt-img-head">Doubts Solved in 5-10 min</div>
              <div className="idoubt-img-text">
                Ask your doubts when you want, and get it solved within 5-10
                minutes
              </div>
            </div>
            <div className="idoubt-left">
              <div className="idoubt-img">
                <img src={doubt2} alt="doubt1" />{" "}
              </div>
              <div className="idoubt-img-head">Experience 1 to 1 learning</div>
              <div className="idoubt-img-text">
                With robust Mentor Support, experience seamless learning with
                personal mentorship
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="idount-whyus">
        <div className="idoubt-whyus-head">Why Choose Us ?</div>
        <div className="idoubt-whyus-card-cont">
          <div className="ibout-whyus-card">
            <div className="ibout-whyus-card-head">100% Free Learning</div>
            <div className="ibout-whyus-card-text">
              On the courses enrolled within the 100% FeesBack offer through
              which you earn your enrollment fee back as reward
            </div>
            <div className="ibout-whyus-card-num">1</div>
          </div>
          <div className="ibout-whyus-card">
            <div className="ibout-whyus-card-head">Structured Course</div>
            <div className="ibout-whyus-card-text">
              Learn from our structured pre recorded courses made by experts to
              meet industry needs
            </div>
            <div className="ibout-whyus-card-num">2</div>
          </div>
        </div>
        <div className="idoubt-whyus-card-cont">
          <div className="ibout-whyus-card">
            <div className="ibout-whyus-card-head">Instant Mentor Support</div>
            <div className="ibout-whyus-card-text">
              Personal mentors to guide and help you throughout your journey as
              a friend through chat, calls & screen sharing
            </div>
            <div className="ibout-whyus-card-num">3</div>
          </div>
          <div className="ibout-whyus-card">
            <div className="ibout-whyus-card-head">
              Projects & Certifications
            </div>
            <div className="ibout-whyus-card-text">
              Build major projects which makes your resume stand apart alongwith
              course completion certifications
            </div>
            <div className="ibout-whyus-card-num">4</div>
          </div>
        </div>
        <div className="idoubt-whyus-card-cont">
          <div className="ibout-whyus-card">
            <div className="ibout-whyus-card-head">
              Internship Opportunities
            </div>
            <div className="ibout-whyus-card-text">
              Get remote internship opportunities after the completion of the
              course along with dedicated assignments
            </div>
            <div className="ibout-whyus-card-num">5</div>
          </div>
          <div className="ibout-whyus-card">
            <div className="ibout-whyus-card-head">Lifetime Course Access</div>
            <div className="ibout-whyus-card-text">
              Get liftetime course access on each course that you enroll, and
              enjoy the benefit of mentoring wheneve you want
            </div>
            <div className="ibout-whyus-card-num">6</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroRefund;
