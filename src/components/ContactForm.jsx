import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socials } from "../data/socials"; // Assuming socials is exported from "../data/socials"
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="contact-contain">
      <div className="contact-body m-3 p-3">
        <div className="contact-title">
          <h3>Drop me a line!</h3>
        </div>
        <div className="contacts">
          {socials.map((social, index) => (
            <div key={index} className="social-item">
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={social.icon} />
                {/* {social.name} */}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;

/* <form onSubmit={handleSubmit}>
          <div>
            
            <label htmlFor="name">Name:</label><br></br>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              onBlur={() => setNameError(name ? "" : "Name is required")}
            />
            <div className="error">{nameError}</div>
          </div>
          <div>
            <label htmlFor="email">Email:</label><br></br>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={() => setEmailError(email ? "" : "Email is required")}
            />
            <div className="error">{emailError}</div>
          </div>
          <div>
            <label htmlFor="message">Message:</label><br></br>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              onBlur={() =>
                setMessageError(message ? "" : "Message is required")
              }
            />
            <div className="error">{messageError}</div>
          </div>
          <button type="submit">Submit</button>
        </form> */
