import React from "react";
import styles from "../css/Sidebar.module.css";

const sidebar = () => {
  return (
    <div className={styles.sidebar}>
       <div className={styles.heading}>
         <p>Filter</p>
         <p>Clear</p>
       </div>
    </div>
   
  );
};

export default sidebar;