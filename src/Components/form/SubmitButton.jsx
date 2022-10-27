import React from "react";
import styles from "./SubmitButton.module.css";

function Submitbutton({text, handleOnChange}){
  return(
    <div>
      <button className={styles.Container} onClick={handleOnChange}>{text}</button>
    </div>
  )
  
}


export default Submitbutton