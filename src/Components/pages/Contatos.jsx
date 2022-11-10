import React from "react";
import { useState, useEffect } from "react";
import Input from "../form/Input";
import Submitbutton from "../form/SubmitButton";
import axios from 'axios'




function Contatos(){
  const [name, setName] = useState('')
  const [number, setNumber] = useState('' )
  const [email, setemail] = useState('')
  const [msg, setmsg] = useState('')
  

  const handleFormSubmit = (e)=> {
    e.preventDefault()
    const dataToSubmit = {
      name,
      number,
      email,
      msg
    }
    
    
    
    axios.post('http://localhost:5000/post',{
     name: dataToSubmit.name,
     number: dataToSubmit.number,
     email: dataToSubmit.email,
     msg: dataToSubmit.msg
   })
    .then((Resp) => console.log(Resp))
    .catch(err => console.log(err))
  }
  
  return (
    <div> 
      <div> 
        <h1>contatos</h1> 
      </div>

     <form onSubmit={handleFormSubmit} >
      <input type="text" value={name} name='name'  placeholder='nome'  onChange={(event) => setName(event.target.value)} /> <br/>

      <input type="number" value={number} name='number' placeholder='numero'  onChange={(event) => setNumber(event.target.value)} />

      <input type="text" value={email} name='email' placeholder='e-mail'  onChange={(event) => setemail(event.target.value)} />

      <input type="text" value={msg} name='msg' placeholder='Sua mensagem'  onChange={(event) => setmsg(event.target.value)} />


      <button type="submit"> Enviar</button>    
    </form>


    </div>
  )  
}


export default Contatos