import React from "react";
import Styles from "./Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const { contactSection } = Styles;

const Contact = () => {
  return (
    <section id="contact" className={contactSection}>
      <div>
        <p>Connect with me...</p>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/am1macdonald/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="https://github.com/am1macdonald">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/xAMacDonaldx/with_replies">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="https://google.ca">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
