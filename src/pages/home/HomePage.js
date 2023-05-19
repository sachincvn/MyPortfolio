import React from "react";
import NavBar from "../../components/navbar/NavBar";
import heroImage from "../../images/hero-image.jpg";
import '../home/HomePage.css'

export default function HomePage() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <section className="flex m-container justify-between">
        <div className="home-txt flex flex-col half-container justify-center">
          <h1>Transforming Ideas into Exceptional Mobile Experiences</h1>
          <p className="my-20">
            Welcome to my portfolio! I'm Sachin chavan, a passionate developer
            specializing in Android and iOS application development. With a keen
            eye for detail and a drive for innovation, I turn ideas into
            powerful mobile experiences that captivate users.
          </p>

          <button className="primary-btn">Hire Me!</button>
        </div>

        <div className="home-image flex half-container justify-center">
          <img src={heroImage} alt="Home Image" />
        </div>
      </section>
    </>
  );
}
