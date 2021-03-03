import React, { useState, useContext } from "react";
import { CarContext } from "../components/contexts/CarContext";
import styles from "../css/SearchForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const SearchForm = () => {
  //States
  const [show, setShow] = useState(false);

  //Context
  const { cars } = useContext(CarContext);

  //Functions
  const handleShow = () => {
    setShow(!show);
    console.log(show);
  };

  // Add class active
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
        <select>
          {Array.from(
            new Set(cars.map((obj) => obj.make))
          ).map((make) => {
            return <option value={make}>{make}</option>;
          })}
        </select>

        <label htmlFor="model">Model</label>
        <input type="text" placeholder="Camry" />

        <label htmlFor="year">Year</label>
        <input type="number" placeholder="1972" />

        <label htmlFor="make">Price</label>
        <input type="range" min="1" max="10000000" />

        <label htmlFor="make">Miles</label>
        <input type="range" min="1" max="10000000" />
      </form>
    </div>
  );
};

export default SearchForm;
