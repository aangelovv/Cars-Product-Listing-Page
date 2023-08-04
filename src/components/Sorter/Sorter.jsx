import React, { useState } from "react";
import styles from "./Sorter.module.css";

const Sorter = ({ data, onSortedData }) => {
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSortChange = (event) => {
    const { value } = event.target;
    setSortBy(value);
    sortData(value, sortOrder);
  };

  const handleOrderChange = (event) => {
    const { value } = event.target;
    setSortOrder(value);
    sortData(sortBy, value);
  };

  const sortData = (sortBy, sortOrder) => {
    const sorted = [...data]; // Create a copy of the data array before sorting

    sorted.sort((a, b) => {
      if (sortOrder === "asc") {
        return a[sortBy] < b[sortBy] ? -1 : a[sortBy] > b[sortBy] ? 1 : 0;
      } else {
        return b[sortBy] < a[sortBy] ? -1 : b[sortBy] > a[sortBy] ? 1 : 0;
      }
    });

    onSortedData(sorted); // Send the sorted data back to the parent component
  };

  return (
    <div className={styles["sorter-container"]}>
      <div>
        <label>Sort by price: </label>
        <select
          value={sortBy}
          onChange={handleSortChange}
          className={styles.select}
        >
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </div>
      <div>
        <label>Sort order: </label>
        <select
          value={sortOrder}
          onChange={handleOrderChange}
          className={styles.select}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
};

export default Sorter;
