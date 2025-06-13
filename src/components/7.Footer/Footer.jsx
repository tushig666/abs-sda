import "./Footer.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_content">
        <p className="footer_text">
            Designed by <a href="
            "target="_blank"> </a>
            <a href="
            "target="_blank"> </a>
        </p>
      </div>
      <div className="footer_contact">
        <div className="footer_contact_item">
          <FaMapMarkerAlt className="footer_icon" />
          <p>123 Main Street, City, Country</p>
        </div>
        <div className="footer_contact_item">
          <FaPhoneAlt className="footer_icon" />
          <p>+1 234 567 890</p>
        </div>
        <div className="footer_contact_item">
          <FaEnvelope className="footer_icon" />
          <p>info@example.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;