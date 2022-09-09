import React from "react";
import styles from './SideBar.module.css'
import {FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa'


function SideBar(props ){
  return(
    <div className={`${styles[props.toggle]}`}>
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
            <a href="#"><FaInstagram/></a>
            <a href="#"><FaGithub/></a>
            <a href="#"><FaLinkedinIn/></a>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default SideBar