import profile from "../assets/muffin.jpg";
import { BsStars } from "react-icons/bs";
import "./Hero.css";
import TypingText from "./TypingText";
function Hero({ name, role }) {
  return (
    <section className="hero" id="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="welcome-badge">
            <BsStars className="star" />
            Welcome to my Portfolio
          </div>
          <div className="hero-text">
            <p className="greeting">Hi ! , I'm</p>
            <h1 className="hero-name">{name}</h1>
            <h2 className="hero-role">
              I'm a{" "}
              <span className="typing-heading">
                <TypingText text={role} speed={80} />
              </span>
            </h2>
          </div>
          <p className="hero-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            accusantium repellendus qui et eum quo blanditiis nulla placeat
            fugit nesciunt rem, omnis, ducimus possimus odit voluptate quam
            aspernatur sapiente voluptates!
          </p>
          <a href="/proimg/resume.pdf" className="hero-btn">
            <button>Download Resume</button>
          </a>
        </div>
        <div className="hero-img">
          <div className="img-wrapper">
            <img src={profile} alt="name" />
            <div className="img-shadow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
