import React from "react";
import styles from "../css/Sidebar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

const sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.heading}>
        <div><p>Filter</p></div>
       <div><FontAwesomeIcon class={styles.filter} icon={faFilter} /></div>
      </div>
      <form>
        <label htmlFor="make">Make</label>
        <input type="text" placeholder="Toyota" />

        <label htmlFor="model">Model</label>
        <input type="text" placeholder="Camry" />

        <label htmlFor="year">Year</label>
        <input type="number" placeholder="1972"/>

        <label htmlFor="make">Price</label>
        <input type="range" min="1" max="10000000" value="1" className={styles.priceRange} />
      </form>
    </div>
  );
};

export default sidebar;
