import React from "react";
import styles from './Home.module.css'
import bgImage from '../img/bg.jpg'
import SideHamburger from '../layout/SideHamburger'
import Button from "../layout/Button";



function Home(){
  return(    
    <header>
      <div className={styles.img_wrapper}>
        <img src={bgImage } alt="background" />
      </div>
      <div className={styles.info}>
        <h1>Full-stack developer & designer</h1>
        <p>Victor Gabriel</p>
        <Button name='Linkin' to='https://www.linkedin.com/in/victor-gabriel-dos-reis-silva-40473b21b/' />
      </div>
      <SideHamburger/>
    </header>
  )
}

export default Home