import React, { useEffect } from "react";
import "./home.scss";
import video from "../../assets/header.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram, FaTripadvisor, FaListUl } from "react-icons/fa";
import { TbApps } from "react-icons/tb";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted loop autoPlay></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Our Packages
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Search Your Ideal Holiday
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination:</label>
            <div className="input flex">
              <input
                type="text"
                placeholder="Enter the name of your destination city ..."
              />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select your date</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="fixLater flex">
              <label htmlFor="price">Max Price</label>
              <h4 className="total">$5000</h4>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>MORE FILTERS</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTripadvisor className="icon" />
          </div>
          <div className="leftIcons">
            <FaListUl className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
