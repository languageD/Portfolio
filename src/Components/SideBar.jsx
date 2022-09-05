import React from "react";
import styles from './SideBar.module.css'
import {FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa'


function SideBar(){
  return(
    <div className={styles.Container}>
      <nav>
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