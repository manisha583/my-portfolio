import pic from "../assets/profile.jpg";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import "./About.css";
function About() {
  return (
    <section id="about" className="about">
      <div className="about-img">
        <img src={pic} alt="muffin" />
      </div>
      <div className="about-text">
        <h2>
          About <span className="highlight">Me</span>
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo optio ad
          aperiam vitae omnis ipsa! Qui, sit! Expedita laudantium dicta
          consectetur, consequuntur ea, nihil vel quibusdam, ducimus ipsum enim
          illum.
        </p>
        <ul className="about-info">
          <li>
            <FaMapMarkerAlt className="icon" />
            <strong>Location:</strong> Nepal
          </li>
          <li>
            <FaEnvelope className="icon" />
            <strong>Email:</strong> manishap2060@gmail.com
          </li>
        </ul>
      </div>
    </section>
  );
}
export default About;
