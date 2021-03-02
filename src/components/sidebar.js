import React, { useState } from "react";
import styles from "../css/Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  //Usestates
  const [show, setShow] = useState(false);

  //Functions
  const handleShow = () => {
    setShow(!show);
  };

  // Add class active
  const activeClass = show ? styles.active : "";

  return (
    <div className={styles.sidebar}>
      <div className={styles.heading} onClick={handleShow}>
        <div className={styles.filter}>
          <p>Filter</p>
          <FontAwesomeIcon className={styles.filter_icon} icon={faFilter} />
        </div>
      </div>

      <form className={`${activeClass}`}>
        <label htmlFor="make">Make</label>
        <input type="text" placeholder="Toyota" />

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

export default Sidebar;
