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
        <img src={costsImg} alt="costs image" />
        <p>Costs é um projeto feito totalmente em reactJS, para ser usado como um planejamento de gastos </p>
      </div> 

      <div className={styles.projects}>
        <img src={costsImg} alt="costs image" />
        <p>PROJETO FUTURO </p>
      </div>
    </div>
  )
}

export default Projetos