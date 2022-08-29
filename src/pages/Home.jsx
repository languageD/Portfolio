import React, { useState } from "react";
import styles from './Home.module.css'
import bgImage from '../img/bg.jpg'
import SideHamburger from '../Components/SideHamburger'


function Home(){
  const [Class, setClass] = useState('')

  return(
    
      <header>
        <div className={styles.img_wrapper}>
          <img src={bgImage } alt="background" />
        </div>
        <div className={styles.info}>
          <h1>Full-stack developer & designer </h1>
          <p>Victor Gabriel </p>
        </div>
        <div onClick={()=>{
          setClass('show_bar')
          console.log('foi')
        }}>  
          <SideHamburger props={setClass}/>
        </div>

      </header>
    
  )
}

export default Home