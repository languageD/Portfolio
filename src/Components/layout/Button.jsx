import React from "react";
import styles from './Button.module.css'

function Button({name , to}){
  return <a href={to} target='_blank'><button className={styles.button}> {name}</button></a>
}

export default Button