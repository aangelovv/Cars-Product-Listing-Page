import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/car-logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <li className={styles.links}>
          <Link to="/">
            <img src={logo} alt="Car Company logo" className={styles.img} />
          </Link>
        </li>
        <div className={styles["links-wrapper"]}>
          <li className={styles.links}>
            <Link to="/cars" className={styles.link}>
              Cars
            </Link>
          </li>
          <li className={styles.links}>
            <Link to="/vans" className={styles.link}>
              Vans
            </Link>
          </li>
          <li className={styles.links}>
            <Link to="/motorcycles" className={styles.link}>
              Motorcycles
            </Link>
          </li>
          <li className={styles.links}>
            <Link to="/other-vehicles" className={styles.link}>
              Other Vehicles
            </Link>
          </li>
        </div>
      </nav>
    </header>
  );
};

export default Header;
