import React from "react";
import styles from './Projetos.module.css'
import costsImg from '../img/savings.svg'

function Projetos(){
  return(
    <div className={styles.Project_container}>
      <div className={styles.Project_header}>
        <h1>Projetos</h1>
      </div>

    
        <div className={styles.projects}>
          <div className={styles.cards_img}>
            <img src={costsImg} alt="costs image" />
          </div>
          <h2>Costs</h2>
          <h3>ReactJS</h3>
          <p  className={styles.project_txt}>Costs é um projeto feito totalmente em reactJS, para ser usado como um planejamento de gastos </p>
        </div> 

        <div className={styles.projects}>
          <div className="img_card">
            <img src={costsImg} alt="costs image" />
          </div>
          <p className={styles.project_txt}>PROJETO FUTURO </p>
        </div>
      </div>
    
  )
}

export default Projetos