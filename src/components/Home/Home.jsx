import React from "react";
import "./home.css";
import video from "../../assets/header.mp4";

const Home = () => {
  return (
    <section className="home">
      <div className="overlay">
        <video src={video} muted loop autoPlay></video>
      </div>
    </section>
  );
};

export default Home;
