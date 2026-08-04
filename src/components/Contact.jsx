import "./Contact.css";
import pic from "../assets/contact.jpg";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { BsChatLeftText } from "react-icons/bs";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact </h2>
      <div className="contact-wrapper">
        <div className="contact-img">
          <img src={pic} alt="contact"></img>
        </div>
        <form className="contact-form">
          <p>Have Any Questions? Send me a message</p>

          <div className="input-group">
            <FaUser className="input-icon" />
            <input type="text" placeholder="Enter ur name" />
          </div>

          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input type="text" placeholder="Enter ur email" />
          </div>

          <div className="input-group textarea-group">
            <BsChatLeftText className="input-icon" />
            <textarea placeholder="Your message" rows="5" />{" "}
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
export default Contact;
