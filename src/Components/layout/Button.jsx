import React from "react";
import { Link } from "react-router-dom";
import styles from './Button.module.css'

function Button({name , to}){
  return <a href={to} target='_blank'><button className={styles.button}>{name}</button></a>
}

export default Button