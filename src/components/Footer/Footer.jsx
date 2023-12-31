import React, { useEffect } from "react";
import "./footer.scss";
import video2 from "../../assets/body.mp4";
import { FiSend } from "react-icons/fi";
import { SiYourtraveldottv } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter Email Address"
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div data-aos="fade-up" className="logoDiv">
              <a href="#" className="logo flex">
                <SiYourtraveldottv /> Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParahraph">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
              quidem nostrum voluptatem laudantium distinctio? Voluptate
              ratione, repellat minus deleniti nihil dolor facilis doloremque.
              Libero dolorum architecto nam odio excepturi provident.
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <FaTwitter className="icon" />
              <FaYoutube className="icon" />
              <BiLogoInstagramAlt className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>
          <div className="footerLinks grid">
            {/* Groupd One */}
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup"
            >
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>
            {/* Groupd Two */}
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">PARTNERS</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Partners
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                TripAdvisor
              </li>
            </div>
            {/* Groupd Three */}
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup"
            >
              <span className="groupTitle">LAST MINUTE</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                London
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                California
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Indonesia
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Europe
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Oceania
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>DESIGNED BY BEHNAM HAMIDI - 2023</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
