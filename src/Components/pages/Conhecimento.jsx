import React from "react";
import styles from './Conhecimento.module.css'
import {IoLogoJavascript} from 'react-icons/io'
import {FaNodeJs, FaGithub,  FaReact} from 'react-icons/fa'
import {SiTypescript, SiMongodb} from 'react-icons/si'
import mini_bg from '../img/mini-bg.png'
import SideHamburger from "../layout/SideHamburger";


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
          <p className={styles.conhecimento_text}>Minha principal linguagem de programação, onde tenho mais conhecimento e dominío sobre, fazendo diversos projetos com a mesma.</p>
        </div>
        <div className={styles.conhecimento}>
          <h2 className={styles.conhecimentoItem}>
          <SiTypescript/> TypeScript</h2>
          <p className={styles.conhecimento_text}> Um ótimo apoio para  o Javascript, gosto bastante de usa-la pela sua   facilidade e utilidade pelo fato de ser extremamente típada.
          </p>
        </div>
        <div className={styles.conhecimento}>
          <h2 className={styles.conhecimentoItem}>
          <FaNodeJs/> NodeJS</h2>
          <p className={styles.conhecimento_text}>
            Um dos back-ends que mais utilizo por ser Fácil de manusear
            e conseguir fazer um ótimo desempenho em vários sistemas.
          </p>
        </div>
        <div className={styles.conhecimento}>
          <h2 className={styles.conhecimentoItem}>
          <FaGithub/> GitHub</h2>
          <p className={styles.conhecimento_text}>Um habitante perfeito para demonstrar meus projetos, com diversas ferramentas versáteis e importantes .  </p>
          </div>
        <div className={styles.conhecimento}>
          <h2 className={styles.conhecimentoItem}>
          <SiMongodb/> Mongodb</h2>
          <p className={styles.conhecimento_text}>Sistema de banco de   dados que mais tenho experiencia, de fácil usabilidade e extenso reportório de ferramentas.</p>
        </div>
        <div className={styles.conhecimento}>
          <h2 className={styles.conhecimentoItem}>
          <FaReact/> ReactJS</h2>
          <p className={styles.conhecimento_text}>
            Front-end extremamente forte e fácil de aplica-lo ao mesmo tempo, gosto tanto de usar e estou utilizando o mesmo para fazer esse portfólio.
          </p>
        </div>
        <div className={styles.imgbg}>
          <img src={mini_bg} alt="background photo" />
        </div>
      </div>
      <SideHamburger/>
    </div>
  )
  
}

export default Conhecimento