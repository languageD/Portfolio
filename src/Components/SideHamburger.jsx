import React from "react";
import styles from './SideHamburger.module.css'


function SideHamburger(props){
  return(
    <div className={`${styles.Side_hamburguer} ${styles[props.toggle]}`}>
      <div className={styles.lines} id={styles['line1']}></div>
      <div className={styles.lines} id={styles['line2']}></div>
      <div className={styles.lines} id={styles['line3']}></div>
    </div>
  )

}

export default SideHamburger