import { Link } from "react-router-dom";
import styles from "./VansCard.module.css";

const showAlertHandler = () => {
  alert("Vehicle has been added to saved!");
};

const VansCard = (props) => {
  return (
    <article className={styles.cars}>
      <article className={styles["car-img-wrapper"]}>
        <img src={props.cars.picture} alt="car fleet img" />
      </article>

      <p className={styles["car-name"]}>{props.cars.name}</p>
      <p className={styles["vehicle-description"]}>
        Model: {props.cars.description}
      </p>
      <p className={styles["vehicle-description"]}>
        Pirce: {props.cars.price} $
      </p>
      <p className={styles["vehicle-description"]}>Color: {props.cars.color}</p>
      <button onClick={showAlertHandler} className={styles.btn}>
        Add to saved
      </button>
    </article>
  );
};

export default VansCard;
