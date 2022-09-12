import React from "react";
import styles from './Conhecimento.module.css'
import {IoLogoJavascript} from 'react-icons/io'
import {FaNodeJs, FaGithub, FaHtml5, FaCss3} from 'react-icons/fa'
import {SiTypescript} from 'react-icons/si'


function Conhecimento(){
  return(
    <div className={styles.container}> 
      <div className={styles.ConhecimentoSessao}>
        <div className={styles.header}>
          <h1>Conhecimentos</h1>
        </div>

        <div className={styles.conhecimentos}>
          <div className={styles.conhecimento}>
            <h2 className={styles.conhecimentoItem}>
          <IoLogoJavascript/>Javascript</h2>
          </div>
          <div className={styles.conhecimento}>
            <h2 className={styles.conhecimentoItem}>
          <SiTypescript/>TypeScript</h2>
          </div>
          <div className={styles.conhecimento}>
            <h2 className={styles.conhecimentoItem}>
          <FaNodeJs/>NodeJS</h2>
          </div>
          <div className={styles.conhecimento}>
            <h2 className={styles.conhecimentoItem}>
          <FaGithub/>GitHub</h2>
          </div>
          <div className={styles.conhecimento}>
            <h2 className={styles.conhecimentoItem}>
          <FaHtml5/>Html</h2>
          </div>
          <div className={styles.conhecimento}>
            <h2 className={styles.conhecimentoItem}>
          <FaCss3/>Css</h2>
          </div>
        </div>
      </div>
    </div>
  )
  
}

export default Conhecimento