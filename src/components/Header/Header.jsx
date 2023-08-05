import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/car-logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <li className={styles.links}>
          <Link to="/">
            <img src={logo} alt="Car Company logo" className={styles.img} />
          </Link>
        </li>
        <div
          className={
            isOpen ? styles["links-wrapper-open"] : styles["links-wrapper"]
          }
        >
          <li className={styles.links}>
            <Link
              to="/cars"
              className={styles.link}
              onClick={() => setIsOpen(false)}
            >
              Cars
              <i className={`${styles.icon} fas fa-car`} />
            </Link>
          </li>
          <li className={styles.links}>
            <Link
              to="/vans"
              className={styles.link}
              onClick={() => setIsOpen(false)}
            >
              Vans
              <i className={`${styles.icon} fas fa-shuttle-van`} />
            </Link>
          </li>
          <li className={styles.links}>
            <Link
              to="/motorcycles"
              className={styles.link}
              onClick={() => setIsOpen(false)}
            >
              Motorcycles
              <i className={`${styles.icon} fas fa-motorcycle`} />
            </Link>
          </li>
          <li className={styles.links}>
            <Link
              to="/other-vehicles"
              className={styles.link}
              onClick={() => setIsOpen(false)}
            >
              Other Vehicles
              <i className={`${styles.icon} fas fa-tractor`} />
            </Link>
          </li>
        </div>
        <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          <i className="fas fa-bars"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
