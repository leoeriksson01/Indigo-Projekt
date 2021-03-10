import React, { useState, useContext, useEffect } from "react";
import { CarContext } from "../components/contexts/CarContext";
import styles from "../css/SearchForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import filterIcon from "../assets/filter.svg";

const SearchForm = () => {
  //Car data
  const { cars, handleFilterChange } = useContext(CarContext);

  // Set and setState being initialized
  const [show, setShow] = useState(false); // In order to show form on tablet and mobile

  //Toggle true/false to be able to show form on tablet and mobile
  const handleShow = () => {
    setShow(!show);
  };

  // Add class active in order to show form on toggle
  const activeClass = show ? styles.active : "";

  return (
    <div className={styles.search_form_wrapper}>
      <div className={styles.heading} onClick={handleShow}>
        <div>
          <p>Filter</p>
        </div>
        <div>
          <img src={filterIcon} alt="filter" />
        </div>
      </div>

      <form className={`${activeClass} ${styles.form}`}>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => handleFilterChange(e, "search")}
        />

        {/* Make */}
        <label htmlFor="make">Make</label>
        <div className={styles.select_wrapper}>
          <select name="make" onChange={(e) => handleFilterChange(e, "make")}>
            <option key={cars} value={"all"}>
              All
            </option>
            {Array.from(new Set(cars.map((obj) => obj.make))).map((make) => {
              return (
                <option key={make} value={make}>
                  {make}
                </option>
              );
            })}
          </select>
        </div>

        {/* Model */}
        <label htmlFor="model">Model</label>
        <div className={styles.select_wrapper}>
          <select name="model" onChange={(e) => handleFilterChange(e, "model")}>
            <option value="all">All</option>
            {Array.from(new Set(cars.map((obj) => obj.model))).map((model) => {
              return (
                <option key={model} value={model}>
                  {model}
                </option>
              );
            })}
          </select>
        </div>

        {/* Year */}
        <label className={styles.form_label} htmlFor="year">
          Year
        </label>
        <div className={styles.min_max_wrapper}>
          <input
            name="year"
            type="number"
            onChange={(e) => handleFilterChange(e, "fromYear")}
            placeholder="1970"
          />
          <input
            name="year"
            type="number"
            onChange={(e) => handleFilterChange(e, "toYear")}
            placeholder="2021"
          />
        </div>

        {/* Price */}
        <label htmlFor="price">Price</label>
        <div className={styles.min_max_wrapper}>
          <input
            name="price"
            type="number"
            onChange={(e) => handleFilterChange(e, "minPrice")}
            placeholder="0"
          />
          <input
            name="price"
            type="number"
            onChange={(e) => handleFilterChange(e, "maxPrice")}
            placeholder="156 000"
          />
        </div>
        
        {/* Miles */}
        <label htmlFor="Miles">Miles</label>
        <div className={styles.min_max_wrapper}>
          <input
            name="miles"
            type="number"
            onChange={(e) => handleFilterChange(e, "minMiles")}
            placeholder="0"
          />
          <input
            name="miles"
            type="number"
            onChange={(e) => handleFilterChange(e, "maxMiles")}
            placeholder="10 000"
          />
        </div>
        {/**/}
      </form>
    </div>
  );
};

export default SearchForm;
