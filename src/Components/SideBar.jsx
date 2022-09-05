import React from "react";
import styles from './SideBar.module.css'

function SideBar(){
  return(
    <div className={styles.Container}>
      <nav>
        <div className={styles.sideItem}>
          <ul>
            <p>Home</p>
          </ul>
          <ul>
            <p>Projetos</p>
          </ul>
          <ul>
            <p>Contato</p>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default SideBar