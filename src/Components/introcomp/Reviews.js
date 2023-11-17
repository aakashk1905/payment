import React, { useState } from "react";
import "./Reviews.css";
const Reviews = () => {
  const [current, setCurrent] = useState(0);
  // const reviews = [
  //   {
  //     img: "https://tutedude.com/images/reviews/Hem%20Vagh.webp",
  //     name: "Hem Wagh",
  //     review:
  //       "I enrolled on the Python course of Tutedude which helped me a lot. Tutedude as a learning platform just didn’t provide me with the course but also boosted my confidence level. The mentors were really helpful and always supported me in my learning period by mentoring me, I was just not taught how to code but also how to build something productive.",
  //   },
  //   {
  //     img: "https://tutedude.com/images/reviews/Anubhav%20Kaushik.webp",
  //     name: "Anubhav Kaushik",
  //     review:
  //       "IThis course was impressive I'd suggest the course to anyone who wants to learn Python from scratch to an advanced level; I now feel 100% confident that I can continue with more advanced topics without getting lost. The lecturer is clear, concise, and extensive in his explanations and covered the material in a logical order.",
  //   },
  //   {
  //     img: "https://tutedude.com/images/reviews/Anil%20Vishwakarma.webp",
  //     name: "Anil Vishwakarma",
  //     review:
  //       "A perfect extensive course for someone who is looking to build a career in Python from great mentors. They were available all the time for any kind of doubts I was facing. I also got hands on many projects throughout the course, now my mentors are helping me to get a good internship.",
  //   },
  //   {
  //     img: "https://tutedude.com/images/reviews/Ishika%20Sutar.webp",
  //     name: "Ishika Sutar",
  //     review:
  //       "Enjoyed this course - the concepts were explained clearly and in a manner that a python beginner could understand. The projects and assignments added to the course were like cherries on the cake. After completing the course, I got an internship at a startup which was very insightful for my career. I would highly recommend everyone who wants to learn python."
  //   },
  // ];
  const reviews = [
    {
      img: "https://tutedude.com/images/reviews/Manish%20Yadav.webp",
      name: "Manish Yadav",
      review:
        "The best part about Tutedude courses are their mentors, they actually help to the extreme. I am glad I took this course and enjoyed learning throughout. The instant 1:1 help I got is what i liked the most and will recommend everyone to go for it."
    },
    {
      img: "https://tutedude.com/images/reviews/Himachal%20Gupta.webp",
      name: "Himachal Gupta",
      review:
        "I have been a graphic designer previously but I wanted to switch to UI/UX as it has been recently more rewarding as a field. So took up this course and I am very happy that it matched all my expectations and I am now a professional UI/UX designer. Thanks Tutedude!"
    },
    {
      img: "https://tutedude.com/images/reviews/Gaurav%20Kumar.webp",
      name: "Gaurav Kumar",
      review:
        "Explanation of the concepts is too good, many real world examples have been to used to explain the things. The course feels very interesting, throughout the course I was excited to learn new concepts and apply them. Also mentors have been a really great support for me, helping me wherever I got stuck. Thanks!"
    },
    {
      img: "https://tutedude.com/images/reviews/Harshit%20Joshi.webp",
      name: "Harshit Joshi",
      review:
        "The instructor of this course is very sweet, she explains all the concepts very elaboratively. Also mentors are actually the best, if I asked something they will make sure I understand my doubt till the end. Also the assignments and projects they gave me, made sure that I get the industry exposure."
    },
  ];

  const next = () => {
    if (current === reviews.length - 1) return;
    setCurrent((old) => ++old);
  };

  const prev = () => {
    if (current === 0) return;
    setCurrent((old) => --old);
  };

  return (
    <section className="irev-reviews irev-container">
      <h3>Hear, what others have to say</h3>
      <div className="irev-reviewsDiv">
        <button
          className="irev-reviewPrev"
          onClick={() => {
            prev();
          }}
          disabled={current === 0}
        >
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.58664 0.946859C8.71024 1.07021 8.8083 1.21673 8.87521 1.37803C8.94212 1.53932 8.97656 1.71223 8.97656 1.88686C8.97656 2.06148 8.94212 2.23439 8.87521 2.39569C8.8083 2.55699 8.71024 2.70351 8.58664 2.82686L3.4133 8.00019L8.58664 13.1735C8.83594 13.4228 8.976 13.761 8.976 14.1135C8.976 14.4661 8.83594 14.8042 8.58664 15.0535C8.33733 15.3028 7.99921 15.4429 7.64664 15.4429C7.29407 15.4429 6.95594 15.3028 6.70664 15.0535L0.586636 8.93353C0.463031 8.81017 0.364967 8.66366 0.298059 8.50236C0.231151 8.34106 0.196712 8.16815 0.196712 7.99353C0.196712 7.8189 0.231151 7.64599 0.298059 7.48469C0.364967 7.3234 0.463031 7.17688 0.586636 7.05353L6.70664 0.933525C7.2133 0.426859 8.06664 0.426859 8.58664 0.946859Z"
              fill="white"
            />
          </svg>
        </button>
        <div className="irev-review">
          <div className="irev-profile">
            <div>
              <img src={reviews[current].img} alt="" />
            </div>
            <p>{reviews[current].name}</p>
          </div>
          <div className="irev-reviewText">
            <svg
              width="36"
              height="27"
              viewBox="0 0 36 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.0625 23.625V8.5C20.0625 6.31196 20.9317 4.21354 22.4789 2.66637C24.026 1.11919 26.1245 0.25 28.3125 0.25C28.6772 0.25 29.0269 0.394865 29.2848 0.652727C29.5426 0.910589 29.6875 1.26033 29.6875 1.625C29.6875 1.98967 29.5426 2.33941 29.2848 2.59727C29.0269 2.85513 28.6772 3 28.3125 3C26.8552 3.00453 25.4589 3.58545 24.4284 4.61592C23.398 5.64639 22.817 7.0427 22.8125 8.5V9.875H33.125C33.8543 9.875 34.5538 10.1647 35.0695 10.6805C35.5853 11.1962 35.875 11.8957 35.875 12.625V23.625C35.875 24.3543 35.5853 25.0538 35.0695 25.5695C34.5538 26.0853 33.8543 26.375 33.125 26.375H22.8125C22.0832 26.375 21.3837 26.0853 20.868 25.5695C20.3522 25.0538 20.0625 24.3543 20.0625 23.625ZM2.875 26.375H13.1875C13.9168 26.375 14.6163 26.0853 15.132 25.5695C15.6478 25.0538 15.9375 24.3543 15.9375 23.625V12.625C15.9375 11.8957 15.6478 11.1962 15.132 10.6805C14.6163 10.1647 13.9168 9.875 13.1875 9.875H2.875V8.5C2.87953 7.0427 3.46045 5.64639 4.49092 4.61592C5.52139 3.58545 6.9177 3.00453 8.375 3C8.73967 3 9.08941 2.85513 9.34727 2.59727C9.60513 2.33941 9.75 1.98967 9.75 1.625C9.75 1.26033 9.60513 0.910589 9.34727 0.652727C9.08941 0.394865 8.73967 0.25 8.375 0.25C6.18696 0.25 4.08854 1.11919 2.54137 2.66637C0.994194 4.21354 0.125 6.31196 0.125 8.5V23.625C0.125 24.3543 0.41473 25.0538 0.930458 25.5695C1.44618 26.0853 2.14565 26.375 2.875 26.375Z"
                fill="#BBBBCC"
              />
            </svg>

            <p>{reviews[current].review}</p>
            <svg
              width="36"
              height="27"
              viewBox="0 0 36 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9375 23.625V8.5C15.9375 6.31196 15.0683 4.21354 13.5211 2.66637C11.974 1.11919 9.87554 0.25 7.6875 0.25C7.32283 0.25 6.97309 0.394865 6.71523 0.652727C6.45737 0.910589 6.3125 1.26033 6.3125 1.625C6.3125 1.98967 6.45737 2.33941 6.71523 2.59727C6.97309 2.85513 7.32283 3 7.6875 3C9.1448 3.00453 10.5411 3.58545 11.5716 4.61592C12.602 5.64639 13.183 7.0427 13.1875 8.5V9.875H2.875C2.14565 9.875 1.44618 10.1647 0.930456 10.6805C0.414731 11.1962 0.125 11.8957 0.125 12.625V23.625C0.125 24.3543 0.414731 25.0538 0.930456 25.5695C1.44618 26.0853 2.14565 26.375 2.875 26.375H13.1875C13.9168 26.375 14.6163 26.0853 15.132 25.5695C15.6478 25.0538 15.9375 24.3543 15.9375 23.625ZM33.125 26.375H22.8125C22.0832 26.375 21.3837 26.0853 20.868 25.5695C20.3522 25.0538 20.0625 24.3543 20.0625 23.625V12.625C20.0625 11.8957 20.3522 11.1962 20.868 10.6805C21.3837 10.1647 22.0832 9.875 22.8125 9.875H33.125V8.5C33.1205 7.0427 32.5395 5.64639 31.5091 4.61592C30.4786 3.58545 29.0823 3.00453 27.625 3C27.2603 3 26.9106 2.85513 26.6527 2.59727C26.3949 2.33941 26.25 1.98967 26.25 1.625C26.25 1.26033 26.3949 0.910589 26.6527 0.652727C26.9106 0.394865 27.2603 0.25 27.625 0.25C29.813 0.25 31.9115 1.11919 33.4586 2.66637C35.0058 4.21354 35.875 6.31196 35.875 8.5V23.625C35.875 24.3543 35.5853 25.0538 35.0695 25.5695C34.5538 26.0853 33.8543 26.375 33.125 26.375Z"
                fill="#BBBBCC"
              />
            </svg>
          </div>
        </div>
        <button
          className="irev-reviewPrev"
          onClick={() => {
            next();
          }}
          disabled={current === reviews.length - 1}
        >
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.413333 0.946859C0.289728 1.07021 0.191664 1.21673 0.124756 1.37803C0.0578473 1.53932 0.023407 1.71223 0.023407 1.88686C0.023407 2.06148 0.0578473 2.23439 0.124756 2.39569C0.191664 2.55699 0.289728 2.70351 0.413333 2.82686L5.58667 8.00019L0.413333 13.1735C0.164029 13.4228 0.0239716 13.761 0.0239716 14.1135C0.0239716 14.4661 0.164029 14.8042 0.413333 15.0535C0.662636 15.3028 1.00076 15.4429 1.35333 15.4429C1.7059 15.4429 2.04403 15.3028 2.29333 15.0535L8.41333 8.93353C8.53694 8.81017 8.635 8.66366 8.70191 8.50236C8.76882 8.34106 8.80326 8.16815 8.80326 7.99353C8.80326 7.8189 8.76882 7.64599 8.70191 7.48469C8.635 7.3234 8.53694 7.17688 8.41333 7.05353L2.29333 0.933525C1.78667 0.426859 0.933333 0.426859 0.413333 0.946859Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Reviews;
