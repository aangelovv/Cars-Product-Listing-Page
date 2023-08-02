import React from "react";
import styles from "./Filter.module.css";

const Filter = ({
  colors,
  selectedColors,
  onColorChange,
  minPrice,
  maxPrice,
  onPriceChange,
}) => {
  return (
    <div className={styles["filter-container"]}>
      <h3 className={styles["filter-heading"]}>Filter</h3>
      <div>
        <h4 className={styles["filter-heading"]}>Colors</h4>
        {colors.map((color) => (
          <div key={color} className={styles["color-checkbox"]}>
            <label>
              <input
                type="checkbox"
                value={color}
                checked={selectedColors.includes(color)}
                onChange={(e) => onColorChange(color, e.target.checked)}
              />
              {color}
            </label>
          </div>
        ))}
      </div>
      <div>
        <h4 className={styles["filter-heading"]}>Price Range</h4>
        <div className={styles["price-label"]}>
          <label>
            Min Price:
            <input
              type="number"
              value={minPrice}
              onChange={(e) => onPriceChange("minPrice", e.target.value)}
            />
          </label>
        </div>
        <div className={styles["price-label"]}>
          <label>
            Max Price:
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => onPriceChange("maxPrice", e.target.value)}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
