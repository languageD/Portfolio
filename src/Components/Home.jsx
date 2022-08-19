import React from "react";
import styles from './Home.module.css'
import bgImage from '../img/bg.jpg'

function Home(){
  return(
    <div className={styles.home}>
      <h1> Full-Stack developer </h1>
      <img src={bgImage} alt="background Image" />
    </div>
  )
}

export default Home