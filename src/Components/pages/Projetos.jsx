import React from "react";
import styles from './Projetos.module.css'
import costsImg from '../img/costsImg.png'
import SideHamburger from "../layout/SideHamburger";

function Projetos(){
  return(
    <div className={styles.Project_container}>
      <div className={styles.Project_header}>
        <h1>Projetos</h1>
        <hr />
      </div>

      <div className={styles.card_container}>
        <div className={styles.card}>
          <a href="https://github.com/languageD/Costs_ReactJS" target='_blank'>
            <div className={styles.cards_img}>
              <img src={costsImg} alt="costs image" />
            </div>
            <div className={styles.card_info}>
              <h2>Costs</h2>
              <h3>ReactJS</h3>
              <p  className={styles.project_txt}>Costs é um projeto feito totalmente em reactJS, para ser usado como um planejamento de gastos </p>
            </div>
          </a>
        </div>
        <div className={styles.card}>
          <div className={styles.pro}>
            <div className={styles.breve}>
              <p>em breve</p>
            </div>
          </div>
          <div className={styles.card_info}>
            <h2>Futuro projeto</h2>
            <p className={styles.project_txt}>Espaço para meu futuro projeto</p>
          </div>
        </div>  
        <div className={styles.card}>
          <div className={styles.pro}>
            <div className={styles.breve}>
              <p>em breve</p>
            </div>
          </div>
          <div className={styles.card_info}>
            <h2>Futuro projeto</h2>
            <p className={styles.project_txt}>Espaço para meu futuro projeto</p>
          </div>
        </div>  
      </div>
       

      <SideHamburger/>
    
    </div>
    
  )
}

export default Projetos