import React from "react";
import styles from './Home.module.css'
import bgImage from '../img/bg.jpg'


function Home(){
  return(
    <div className={styles.img_wrapper}>
      <img src={bgImage } alt="background" />
      
    </div>
  )
}

export default Home