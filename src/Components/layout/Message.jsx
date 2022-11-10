import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./Message.module.css"

function Mensage({txt, type}){
    let [visible, setvisible] = useState(false)

        useEffect(()=> {

            if(!txt){
                setvisible(false)
                return
            }
            
            setvisible(true)

            const timer = setTimeout(() =>{
                setvisible(false)
            }, 3000)
            

            return () => clearTimeout(timer)    
        
            
        }, [txt])

    return(
        <>
            {visible &&(
                <div className={`${styles.messageConteiner} ${styles[type]}`}>{txt}</div>
            )}
        </>
    )
}

export default Mensage