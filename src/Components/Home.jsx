import React from "react";
import styles from './Home.module.css'
import bgImage from '../img/bg.jpg'


function Home(){
  return(
    <div className={styles.img_wrapper}>
      <div className={styles.home_info}>
        <h1>Full-stack developer & designer  </h1>
        <p >fgdfgdgdfgdfg</p>
      </div>
      
      <img src={bgImage } alt="background" />
      
      
    </div>
  )
}

export default Home