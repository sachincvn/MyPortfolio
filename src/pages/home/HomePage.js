import React from "react";
import heroImage from "../../images/hero-image.jpg";
import aboutImage from "../../images/about_image.png";
import shape1 from "../../images/shape1.svg";
import "../home/HomePage.css";
import Projects from "../../components/projects/Projects";
import Mobile from "../../components/mobile/Mobile";

export default function HomePage() {
  return (
    <>
      <section className="home flex m-container justify-between">
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

      <div className="cross-strip">
        <h3>Android</h3>
        <h3>IOS</h3>
        <h3>Web-Design</h3>
        <h3>Javascript</h3>
        <h3>C#</h3>
        <h3>Dart</h3>
      </div>

      <section className="flex m-container justify-between">
        <div className="about-image flex half-container justify-center">
          <img src={aboutImage} alt="About us thumbnail" />
        </div>

        <div className="flex flex-col half-container justify-center">
          <h1 className="my-20">About Me</h1>

          <p className="mt-40">
            Hello! I'm Sachin chavan , a self-taught programmer and passionate
            developer with a strong focus on mobile application development for
            Android and iOS platforms. I completed my Bachelor's degree in
            Computer Applications (BCA) from Sharnbasva University, where I
            honed my technical skills and laid the foundation for my journey in
            the world of software development.
          </p>

          <p className="mt-20">
            With a strong foundation in programming languages such as C# Java,
            and Dart, as well as web technologies like HTML, CSS, and
            JavaScript, I bring a diverse skill set to the table. I am
            passionate about creating exceptional user experiences and ensuring
            that every line of code I write contributes to a seamless and
            intuitive application.
          </p>

          <p className="mt-20">
            Through my portfolio, you can explore the projects I have worked on,
            showcasing my technical expertise and dedication to excellence. I am
            always excited to take on new challenges and contribute to projects
            that push the boundaries of what is possible in the digital realm.
          </p>
        </div>
      </section>

      <section className="flex justify-between">
        <div className="left-trapezoid"></div>

        <div className="flex justify-center align-center">
          <h4>Follow me on</h4>
          <div className="socail-links">
          
          </div>
        </div>

        <div className="right-trapezoid"></div>
      </section>

      <section className="flex flex-col m-container align-center">
        <h2>Skills </h2>
        <p className="my-10">I will trasform ideas into : </p>

        <div className="skills p-40">
          <div className="skill-container p-20 flex-col align-start justify-between">
            <h3>Mobile application</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              consequuntur itaque cum! Architecto odio, accusamus iure incidunt
              at minima provident recusandae obcaecati sit molestias.
            </p>
          </div>

          <div className="skill-container p-20 flex-col align-start justify-between">
            <h3>Web application</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              perspiciatis eaque, minima laudantium, impedit quas, nam dolorem
              perferendis porro molestiae dignissimos!
            </p>
          </div>
        </div>
      </section>

      {/* <Mobile/> */}

      <Projects />

      <section>
        <div className="hire-me-section">
          <div className="shape1"></div>
          <div className="shape2"></div>
          
          <h1 className="mtxt">
            See the impcat of good, conversion-oriented development on your
            buisness.
          </h1>
          
          <button className="primary-btn self-end">Hire Me</button>

        </div>
      </section>
    </>
  );
}
