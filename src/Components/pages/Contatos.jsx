import React from "react";
import { useState, useEffect } from "react";
import Input from "../form/Input";
import Submitbutton from "../form/SubmitButton";
import axios from 'axios'




function Contatos(){
  const [backend, setBackend] = useState({})
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [email, setemail] = useState('')
  const [dados, setDados] = useState([{}])


  const handleFormSubmit= (e)=> {
    e.preventDefault()
    const dataToSubmit = {
      name,
      number,
      email,
    }
   axios.post('http://localhost:5000/post',{
     name: dataToSubmit.name,
     number: dataToSubmit.number,
     email: dataToSubmit.email
   })
    .then((Resp) => console.log(Resp))
    .catch(err => console.log(err))

  }
  
   

 
 
  
  
  return (
    <div> {/* conteiner */}
      <div> {/* div header*/}
        <h1>contatos</h1> 
      </div>

     <form onSubmit={handleFormSubmit} >
      <input type="text" value={name} name='name'  placeholder='nome'  onChange={(event) => setName(event.target.value)} /> <br/>

      <input type="number" value={number} name='number' placeholder='numero'  onChange={(event) => setNumber(event.target.value)} />
      <input type="text" value={email} name='email' placeholder='e-mail'  onChange={(event) => setemail(event.target.value)} />
      <button type="submit" >submit</button>    
    </form>


    </div>
  )  
}


export default Contatos