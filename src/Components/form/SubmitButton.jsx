import React from "react";
import styles from "./SubmitButton.module.css";

function Submitbutton({text}){
  return(
    <div>
      <button className={styles.Container}>{text}</button>
    </div>
  )
  
}


export default Submitbutton