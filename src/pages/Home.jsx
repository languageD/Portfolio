import React from "react";
import styles from './Home.module.css'
import bgImage from '../img/bg.jpg'
import SideHamburger from '../Components/SideHamburger'


function Home(){
  return(
    
      <header>
        <div className={styles.img_wrapper}>
          <img src={bgImage } alt="background" />
        </div>
        <div className={styles.info}>
          <h1>Full-stack developer & designer </h1>
          <p>Victor Gabriel </p>
        </div>
        <div>
          <SideHamburger/>
        </div>

      </header>
    
  )
}

export default Home