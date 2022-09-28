import React from "react";
import { useState } from "react";
import styles from './SideHamburger.module.css'
import SideBar from "./SideBar";


function SideHamburger(){
  const [toggle, settoogle] = useState('')
  return(
    <div onClick={() =>{
      if(toggle){
        settoogle('')
      }
      else{
        settoogle('show_bar')
      }
    }}>
       <SideBar toggle={toggle}/>
      <div className={`${styles.Side_hamburguer} ${styles[toggle]}`}>
        <div className={styles.lines} id={styles['line1']}></div>
        <div className={styles.lines} id={styles['line2']}></div>
        <div className={styles.lines} id={styles['line3']}></div>
      </div>
    </div>
  )
}

export default SideHamburger