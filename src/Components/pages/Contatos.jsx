import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'
import Message from "../layout/Message";




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
    <div> 
      <div> 
        <h1>contatos</h1> 
      </div>
      {showMessage && < Message txt={messageAlert.txt} type={messageAlert.type}/> }

     <form onSubmit={handleFormSubmit} id='form'>
        <input type="text" value={user.name} name='name'  placeholder='nome'  onChange={gettingInput} /> <br/>

        <input type="number" value={user.number} name='number' placeholder='numero'  onChange={gettingInput}  />

        <input type="text" value={user.email} name='email' placeholder='e-mail' onChange={gettingInput}  />

        <input type="text" value={user.messageInput} name='messageInput' placeholder='Sua mensagem' onChange={gettingInput}  />

        <button type="submit">Enviar</button>    
      </form>
    </div>
  )  
}


export default Contatos