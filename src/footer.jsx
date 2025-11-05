import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faXTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Button from "./button";

function Footer({ onSubscribeClick }) {
  return (
    <footer className="footer">
      <div className="footercontainer">
        <div className="footercolumn">
          <p>Stay updated with the latest travel deals and tips.</p>
          <Button text="Subscribe" onClick={onSubscribeClick} />
        </div>

        <div className="footercolumn">
          <h3>Contact</h3>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Travel Street, City,
            Country
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> info@aeroflot.com
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> +1 234 567 890
          </p>
        </div>

        <div className="footercolumn">
          <h3>Follow Us</h3>
          <p>
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </p>
          <p>
            <FontAwesomeIcon icon={faXTwitter} /> X (Twitter)
          </p>
          <p>
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </p>
        </div>
      </div>

      <div className="footerbottom">
        <h2>Aeroflot</h2>
      </div>
    </footer>
  );
}

export default Footer;
