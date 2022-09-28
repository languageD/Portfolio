import React from "react";
import styles from './SideBar.module.css'
import {FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { Link } from "react-router-dom";


function SideBar(props ){
  return(
    <div className={`${styles[props.toggle]}`}>
     <div className={styles.Container}>
        <nav>
          <div className={styles.sideItem}>
            <ul>
              <li className={styles.itens}><Link to='/'>Home</Link></li>
            </ul>
            <ul>
              <li  className={styles.itens}><Link to='/Conhecimento'>Conhecimento</Link></li>
            </ul>
            <ul>
              <li  className={styles.itens}><Link to='/projetos'>Projetos</Link> </li>
            </ul>
            <ul>
              <li  className={styles.itens}><Link to='/'>Contato</Link></li>
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