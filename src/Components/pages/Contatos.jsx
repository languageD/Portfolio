import React from "react";
import { useState } from "react";
import axios from 'axios'
import Message from "../layout/Message";
import SideHamburger from "../layout/SideHamburger";
import styles from './Contatos.module.css'




function Contatos(){
  const [user, setUser] = useState({
    name: '',
    number: '',
    email: '',
    messageInput: ''
  })
  const [messageAlert, setmesssageAlert] = useState({
    txt:'',
    type:''
  })
  const [showMessage, setshowMessage] = useState(false)


  const gettingInput = (e) => setUser({...user, [e.target.name]: e.target.value})

  const handleFormSubmit = (e)=> {
    e.preventDefault()
   
    axios.post('http://localhost:5000/post',{
      name: user.name,
      number: user.number,
      email: user.email,
      messageInput: user.messageInput
    })
    .then((resp) =>{
      setshowMessage(true)
      setmesssageAlert({
        txt: 'Enviado com sucesso!',
        type: 'success'
      })
    })
    .catch((error) =>{
      setshowMessage(true)
      setmesssageAlert({
        txt: 'Verifique se todas as caixas estão preenchidas!',
        type: 'error'
      })
      
    })  

    setUser({
      name: '',
      number: '',
      email: '',
      messageInput: ''
    })
  }
  return (
    <section className={styles.Container}> 
      {showMessage && < Message txt={messageAlert.txt} type={messageAlert.type}/> }

      <div className={styles.Wrapper}>
        <div className={styles.Bg_left}></div>
        <div className={styles.Bg_right}>
          <h1>Contatos</h1> 
          <SideHamburger/>
            <form onSubmit={handleFormSubmit}>
              <div className={styles.Field_group}>
                <input type="text" value={user.name} name='name'  placeholder='Nome'  onChange={gettingInput} className={styles.Inputs}  autoComplete="off"/> <br/>
              </div>

              
              <div className={styles.field_group}>
                <input type="text" value={user.email} name='email' placeholder='E-mail' onChange={gettingInput} className={styles.Inputs}  autoComplete="off"/>
              </div>
              <div className={styles.field_group}>
                <input type="text" value={user.messageInput} name='messageInput' placeholder='Sua mensagem' onChange={gettingInput} className={styles.Inputs}  autoComplete="off" />
              </div>
              <button type="submit" className={styles.button}>Enviar</button>    
            </form>
        </div>
      </div>
    </section>
  )  
}


export default Contatos