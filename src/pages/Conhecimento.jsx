import React from "react";
import styles from './Conhecimento.module.css'
import {FaJava} from 'react-icons/fa'


function Conhecimento(){
  return(
    <div className={styles.container}> 
      <div className={styles.ConhecimentoSessao}>
        <div className={styles.header}>
          <h1>Conhecimentos</h1>
        </div>

        <div className={styles.conhecimentos}>
          <div className={styles.conhecimento}>
            <h2 className={styles.conhecimentoItem}><FaJava></FaJava>Javascript</h2>
          </div>
        </div>
      </div>
    </div>
  )
  
}

export default Conhecimento