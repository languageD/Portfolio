import React from "react";
import styles from './Projetos.module.css'
import costsImg from '../img/test.png'
import SideHamburger from "../Components/SideHamburger";

function Projetos(){
  return(
    <div className={styles.Project_container}>
      <div className={styles.Project_header}>
        <h1>Projetos</h1>
      </div>

      <div className={styles.card_container}>
        <div className={styles.card}>
          <div className={styles.cards_img}>
            <img src={costsImg} alt="costs image" />
          </div>
          <div className={styles.card_info}>
            <h2>Costs</h2>
            <h3>ReactJS</h3>
            <p  className={styles.project_txt}>Costs é um projeto feito totalmente em reactJS, para ser usado como um planejamento de gastos </p>
          </div>
        </div> 
        <div className={styles.card}>
          <div className={styles.cards_img}>
            <img src={costsImg} alt="costs image" />
          </div>
          <div className="card_info">
            <h2>Costs</h2>
            <h3>ReactJS</h3>
            <p  className={styles.project_txt}>Costs é um projeto feito totalmente em reactJS, para ser usado como um planejamento de gastos </p>
          </div>
        </div> 
      </div>

      <SideHamburger/>
    
    </div>
    
  )
}

export default Projetos