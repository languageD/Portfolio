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


  function submit(e, text){

    fetch("http://localhost:5000/api", {
      method: "POST",
      'content-Type': 'application/json',
    })
    .then((resp)=> resp.json())
    .then((dados)=> setDados(dados))
    // {console.log(dados)}
  }

  
  
  return (
    <div> {/* conteiner */}
      <div> {/* div header*/}
        <h1>contatos</h1> 
      </div>

    <form onSubmit={handleFormSubmit} method='POST'>
      <input type="text" value={name} name={name}  onChange={(event) => setName(event.target.value)} />
      <input type="number" value={number} name={number}  onChange={(event) => setNumber(event.target.value)} />
      <input type="text" value={email} name={email}  onChange={(event) => setemail(event.target.value)} />
      <button type="submit">submit</button>    
    </form>


    </div>
  )  
}

export default Contatos