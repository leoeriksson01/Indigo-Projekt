import React, { useState, useContext, useEffect } from "react";
import { CarContext } from "../components/contexts/CarContext";
import styles from "../css/SearchForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const SearchForm = () => {
  //Car data
  const { cars, maxPrice, handleFilterChange } = useContext(CarContext);

  // Set and setState being initialized
  const [show, setShow] = useState(false); // In order to show form on tablet and mobile

  //Toggle true/false to be able to show form on tablet and mobile
  const handleShow = () => {
    setShow(!show);
  };

  // Add class active in order to show form on toggle
  const activeClass = show ? styles.active : "";

  return (
    <div>
      <div className={styles.heading} onClick={handleShow}>
        <div className={styles.filter}>
          <p>Filter</p>
          <FontAwesomeIcon className={styles.filter_icon} icon={faFilter} />
        </div>
      </div>

      <form className={`${activeClass}`}>
        <label htmlFor="make">Make</label>
        <select
          name="make"
          id="make"
          onChange={(e) => handleFilterChange(e, "make")}
        >
          {" "}
          {/*listens for when input field is changed*/}
          <option value="all">All</option>
          {Array.from(new Set(cars.map((obj) => obj.make))).map((make) => {
            return (
              <option key={make} value={make}>
                {make}
              </option>
            );
          })}
        </select>

        <label htmlFor="model">Model</label>
        <input id="model" type="text" placeholder="Camry" />

        <label htmlFor="year">Year</label>
        <div className={styles.year}>
          <input
            type="number"
            onChange={(e) => handleFilterChange(e, "fromYear")}
            placeholder="From"
          />
          <input
            type="number"
            onChange={(e) => handleFilterChange(e, "toYear")}
            placeholder="To"
          />
        </div>

        <label htmlFor="make">Price</label>
        <input
          type="range"
          min="1"
          max="800000"
          onChange={(e) => handleFilterChange(e, "maxPrice")}
        />
        <div>{maxPrice}</div>

        <label htmlFor="make">Miles</label>
        <input type="range" min="1" max="10000000" />
      </form>
    </div>
  );
};

export default SearchForm;
