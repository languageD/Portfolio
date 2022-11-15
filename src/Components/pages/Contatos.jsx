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
  const [messageAlert, setmesssageAlert] = useState('')


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
      setmesssageAlert('success')
      console.log('deu certo') 
    })
    .catch((error) =>{
      setmesssageAlert(error)
      console.log('deu erro')
      
    })  
  }
  return (
    <div> 
      <div> 
        <h1>contatos</h1> 
      </div>
      {messageAlert && < Message txt='Aconteceu um erro, certifique-se que todas estão prenchidas.' type='error'/>  }

     <form onSubmit={handleFormSubmit} id='form'>
        <input type="text" value={user.name} name='name'  placeholder='nome'  onChange={gettingInput} /> <br/>

        <input type="number" value={user.number} name='number' placeholder='numero'  onChange={gettingInput}  />

        <input type="text" value={user.email} name='email' placeholder='e-mail' onChange={gettingInput}  />

        <input type="text" value={user.messageInput} name='messageInput' placeholder='Sua mensagem' onChange={gettingInput}  />


        <button type="submit"> Enviar</button>    
      </form>
    </div>
  )  
}


export default Contatos