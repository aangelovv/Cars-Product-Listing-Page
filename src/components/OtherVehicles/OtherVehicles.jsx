import React, { useEffect, useState } from "react";
import * as vehiclesService from "../../services/vehiclesService";
import styles from "./OtherVehicles.module.css";
import CarsCard from "./OtherVehiclesCard";
import tractorImage from "../../assets/Farming-Tractor.png";
import Sorter from "../Sorter/Sorter";
import Filter from "../Filter/Filter";
import Footer from "../Footer/Footer";

const OtherVehicles = () => {
  const [cars, setCars] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [totalVehicles, setTotalVehicles] = useState(0);
  const [carsCounter, setCarsCounter] = useState(0); // State to keep track of the number of cars currently shown

  // State for filtering options
  const [colors, setColors] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    loadInitialProjects();
    loadColors();
  }, []);

  const loadInitialProjects = async () => {
    try {
      const { data, count } = await vehiclesService.getAllWithCount(
        "otherVehicles",
        0
      );
      setCars(data);
      setTotalVehicles(count);
      setHasMore(data.length >= 5); // Enable "Load More" button if there are 5 or more cards in the initial response
    } catch (error) {
      console.error("Error loading projects:", error);
    }
  };

  const loadColors = async () => {
    try {
      const uniqueColors = await vehiclesService.getAllColors("otherVehicles");
      setColors(uniqueColors);
    } catch (error) {
      console.error("Error loading colors:", error);
    }
  };

  const loadMoreProjects = async (skipCount) => {
    try {
      const { data, count } = await vehiclesService.getAllWithCount(
        "cars",
        skipCount
      );
      if (data.length === 0) {
        // No more cards to display
        setHasMore(false);
      } else {
        const newProjects = cars.concat(
          data.filter((item) => !cars.some((project) => project.id === item.id))
        );
        setCars(newProjects);
        setHasMore(totalVehicles > newProjects.length); // Enable "Load More" button if there are more vehicles to load
      }
    } catch (error) {
      console.error("Error loading more projects:", error);
    }
  };

  const handleSortedData = (sortedData) => {
    setCars(sortedData);
    setHasMore(totalVehicles > sortedData.length); // Update hasMore based on the total count of vehicles after sorting
  };

  const handleColorChange = (color, isChecked) => {
    if (isChecked) {
      setSelectedColors((prevColors) => [...prevColors, color]);
    } else {
      setSelectedColors((prevColors) => prevColors.filter((c) => c !== color));
    }
  };

  const handlePriceChange = (type, value) => {
    if (type === "minPrice") {
      setMinPrice(value);
    } else if (type === "maxPrice") {
      setMaxPrice(value);
    }
  };

  const filterCars = (cars) => {
    const filteredCars = cars.filter(
      (car) =>
        (selectedColors.length === 0 || selectedColors.includes(car.color)) &&
        (minPrice === "" || car.price >= Number(minPrice)) &&
        (maxPrice === "" || car.price <= Number(maxPrice))
    );
    return filteredCars;
  };

  useEffect(() => {
    const filteredCars = filterCars(cars);
    setCarsCounter(filteredCars.length); // Update the carsCounter with the number of cars currently shown
  }, [cars, selectedColors, minPrice, maxPrice]);

  const handleLoadMore = () => {
    loadMoreProjects(cars.length);
  };

  return (
    <>
      <article className={styles.background}>
        <img
          src="https://i.pinimg.com/originals/37/6c/78/376c788b791d6c11dc5f58d8e5e0f027.jpg"
          alt="react-pic"
          className={styles.image}
        />
      </article>
      <div className={styles["car-collection-wrapper"]}>
        <h2 className={styles["cars-collection-heading"]}>
          The Tractors go VROOM VROOM!
        </h2>
        <div className={styles["car-collection-img"]}>
          <img src={tractorImage} alt="cars-collection" />
        </div>
        <p className={styles.joke}>It's so heavy, he broke the style :(</p>
      </div>
      <section className={styles["cars-collection"]}>
        <div className={styles["sorter"]}>
          <Sorter data={cars} onSortedData={handleSortedData} />
        </div>
        {/* Display the CarFilter component */}
        <Filter
          colors={colors}
          selectedColors={selectedColors}
          onColorChange={handleColorChange}
          minPrice={minPrice}
          maxPrice={maxPrice}
          onPriceChange={handlePriceChange}
        />
        {filterCars(cars).length > 0 ? (
          filterCars(cars).map((x) => <CarsCard key={x.id} cars={x} />)
        ) : (
          <h3 className={styles["no-cars"]}>No Vehicles Available</h3>
        )}
        <div className={styles["cars-counter"]}>
          Vehicles Shown: {carsCounter}
        </div>
      </section>
      <div className={styles["centered-div"]}>
        {hasMore && (
          <button
            className={styles.btn}
            onClick={handleLoadMore}
            disabled={!hasMore}
          >
            Load More
          </button>
        )}
      </div>
      <Footer />
    </>
  );
};

export default OtherVehicles;
