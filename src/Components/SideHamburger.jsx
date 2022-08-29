import React from "react";
import styles from './SideHamburger.module.css'

function SideHamburger(props){
  return(
    <div className={`${styles.Side_hamburguer} ${styles[props.show_bar]}`}>
      <div className={styles.lines} id="line1"></div>
      <div className={styles.lines} id="line2"></div>
      <div className={styles.lines} id="line3"></div>
    </div>
  )

}

export default SideHamburger