import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const HeroBG = "../../assets/img/bg/hero_bg_1_1.jpg";
const title_shape = "../../assets/img/shape/title_shape.png";
const Curved_B = "../../assets/img/shape/curved-shape-bottom.png";

const CountdownHero = () => {
  const countdownDate = new Date("06/07/2025").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: "0",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const format = (num) => (num < 10 ? `0${num}` : `${num}`);

      setTimeLeft({
        days: `${days}`,
        hours: format(hours),
        minutes: format(minutes),
        seconds: format(seconds),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownDate]);

  return (
    <div className="vs-hero-wrapper">
      <div
        className="hero-slider-4 vs-carousel"
        data-slide-show="1"
        data-md-slide-show="1"
        data-fade="true"
        data-arrows="true"
      >
        <div className="vs-hero-slide">
          <div
            className="vs-hero-bg"
            style={{ backgroundImage: `url("${HeroBG}")` }}
            data-overlay="overlay1"
            data-opacity="7"
          ></div>

          <div className="hero-content-style4">
            <span
              className="sub-title2"
              data-ani="slideinup"
              data-ani-delay="0s"
            >
              আর মাত্র বাকি
              <img
                className="title-shape"
                src={title_shape}
                alt="title shape"
              />
            </span>

            <div className="text-center mt-2 mb-2">
              <ul className="event-counter style4 counter-list d-flex justify-content-center">
                <li>
                  <div className="day count-number">{timeLeft.days}</div>
                  <span className="count-name">Days</span>
                </li>
                <li>
                  <div className="hour count-number">{timeLeft.hours}</div>
                  <span className="count-name">Hours</span>
                </li>
                <li>
                  <div className="minute count-number">{timeLeft.minutes}</div>
                  <span className="count-name">Minutes</span>
                </li>
                <li>
                  <div className="seconds count-number">{timeLeft.seconds}</div>
                  <span className="count-name">Seconds</span>
                </li>
              </ul>
            </div>

            <h1
              className="hero-title"
              data-ani="slideinup"
              data-ani-delay="0.2s"
            >
              পিকনিক ও সাংস্কৃতিক অনুষ্ঠান
            </h1>
            <h1
              className="hero-title"
              data-ani="slideinup"
              data-ani-delay="0.4s"
            >
              ধরমপুর মাধ্যমিক বিদ্যালয়
            </h1>

            <div
              className="event-info"
              data-ani="slideinup"
              data-ani-delay="0.6s"
            >
              <span>
                <i className="fas fa-circle"></i>ঈদের তৃতীয় দিন, ১০ জুন, ২০২৫
                {"(সম্ভাব্য)"}
              </span>{" "}
              <span>
                <i className="fas fa-circle"></i> ধরমপুর মাধ্যমিক বিদ্যালয়
              </span>
            </div>

            <div
              className="btn-group"
              data-ani="slideinup"
              data-ani-delay="0.8s"
            >
              <Link to="/registration" className="vs-btn">
                রেজিস্ট্রেশন করুন
              </Link>{" "}
              <Link to="/about" className="vs-btn style5">
                বিস্তারিত জানুন
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="section-after">
        <img src={Curved_B} alt="shape" />
      </div>
    </div>
  );
};

export default CountdownHero;
