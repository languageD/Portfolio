import React from "react";
import styles from './SideBar.module.css'
import {FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import SideHamburger from "./SideHamburger";


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
            <a href="https://www.instagram.com/victorgrs11/" target='_blank'><FaInstagram/></a>
            <a href="https://github.com/languageD" target='_blank'><FaGithub/></a>
            <a href="https://www.linkedin.com/in/victor-gabriel-dos-reis-silva-40473b21b/" target='_blank'><FaLinkedinIn/></a>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default SideBar