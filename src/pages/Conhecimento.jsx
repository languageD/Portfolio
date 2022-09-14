import React from "react";
import styles from './Conhecimento.module.css'
import {IoLogoJavascript} from 'react-icons/io'
import {FaNodeJs, FaGithub,  FaReact} from 'react-icons/fa'
import {SiTypescript, SiMongodb} from 'react-icons/si'


function Conhecimento(){
  return(
  
      <div className={styles.ConhecimentoSessao}>
        <div className={styles.header}>
          <h1>Conhecimentos</h1>
          <hr />
        </div>

        <div className={styles.conhecimentos}>
          <div className={styles.conhecimento}>
            <h2 className={styles.conhecimentoItem}>
          <IoLogoJavascript/>Javascript</h2>
          <p className={styles.conhecimento_text}>Minha principal linguagem de programação, onde tenho mais conhecimento e dominio sobre, fazendo diversos projetos com a mesma</p>
          </div>
          <div className={styles.conhecimento}>
            <h2 className={styles.conhecimentoItem}>
          <SiTypescript/> TypeScript</h2>
          <p className={styles.conhecimento_text}>um otimo apoio para o Javascript, gosto bastante de usa-la pela sua facilidade e utilidade pelo fato de ser  extremamente tipada </p>
          </div>
          <div className={styles.conhecimento}>
            <h2 className={styles.conhecimentoItem}>
          <FaNodeJs/> NodeJS</h2>
          <p className={styles.conhecimento_text}>
            Um dos back-ends que mais utilizo por ser Facil de manusear  
            e conseguir fazer um otimo desempenho em varios sistemas
          </p>
          </div>
          <div className={styles.conhecimento}>
            <h2 className={styles.conhecimentoItem}>
          <FaGithub/> GitHub</h2>
          <p className={styles.conhecimento_text}>Um habiente perfeito para demonstar meus projetos, com diversas ferramentas que ajuda eu e muito outros usuarios  </p>
          </div>
          <div className={styles.conhecimento}>
            <h2 className={styles.conhecimentoItem}>
          <SiMongodb/> Mongodb</h2>
          <p className={styles.conhecimento_text}>Sistema de banco de dados que  mais tenho experiencia, de facil usabilidade e extenso reportorio de ferramentas</p>
          </div>
          <div className={styles.conhecimento}>
            <h2 className={styles.conhecimentoItem}>
          <FaReact/> ReactJS</h2>
          <p className={styles.conhecimento_text}>
            Front-end extremamente forte e facil de aplica-lo ao mesmo tempo, gosto tanto de usar e estou utilizando o mesmo para fazer esse portfolio.
          </p>
          </div>
        </div>
      </div>
  )
  
}

export default Conhecimento