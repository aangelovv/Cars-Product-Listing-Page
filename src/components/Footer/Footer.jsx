import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import styles from "./Footer.module.css";
import logo from "../../assets/car-logo.png";

console.log(styles);

function Footer() {
  return (
    <footer className="footer">
      <div className={styles.logo}>
        <img src={logo} alt="Car deals Logo" />
      </div>
      <div className={styles.contact}>
        <p>
          {" "}
          <FaMapMarkerAlt /> 608 E Landstreet Rd B, Orlando, FL 32824
        </p>
        <p>
          {" "}
          <FaPhone /> +1 407-504-7876
        </p>
        <p>
          {" "}
          <FaMapMarkerAlt /> 3450 W Colonial Dr, Orlando, FL 32808
        </p>
        <p>
          {" "}
          <FaPhone /> +1 407-578-9377
        </p>
      </div>
      <div className={styles["social-icons"]}>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://github.com/aangelovv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/angel-angelov95/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
