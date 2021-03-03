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
    </div>
  );
};

export default Sidebar;
