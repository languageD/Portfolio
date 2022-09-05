import React from "react";
import styles from './SideBar.module.css'
import {FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa'


function SideBar(props ){
  return(
    <div className={`${styles.Container}  ${styles[props.toggle]}`}>
      <nav  id={styles['toggle']}>
        <div className={styles.sideItem}>
          <ul>
            <a href="#" className={styles.itens}>Home</a>
          </ul>
          <ul>
            <a href="#" className={styles.itens}>Projetos</a>
          </ul>
          <ul>
            <a href="#" className={styles.itens}>Contato</a>
          </ul>
        </div>

        <div className={styles.icons}>
          <a href="#"><FaInstagram/>Instagram</a>
          <a href="#"><FaGithub/>Github</a>
          <a href="#"><FaLinkedinIn/>Linkedin</a>
        </div>
      </nav>
    </div>
  )
}

export default SideBar