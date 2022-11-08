import React from "react";
import { useState, useEffect } from "react";
import Input from "../form/Input";
import Submitbutton from "../form/SubmitButton";



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
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
       dataToSubmit
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
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