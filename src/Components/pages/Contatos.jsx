import React from "react";
import { useState, useEffect } from "react";
import Input from "../form/Input";
import Submitbutton from "../form/SubmitButton";

function Contatos(){
  const [backend, setBackend] = useState([])
  const [email, setemail] = useState('')
  const [dados, setDados] = useState()

  function submit(e){
    e.preventDafault()
    fetch("http://localhost:5000/api", {
      method: "POST",
      'content-Type': 'application/json',
    })
    .then((resp)=> resp.json())
    .then((dados)=> setDados(dados))
  }

  function sendEmail(e){
    setBackend(
      e.target.value
    )
  } 

  useEffect(()=>{
    fetch("http://localhost:5000/api", {
      method: "GET",
      headers:{
        'content-Type': 'application/json',
      }
      
    })
    .then((resp)=> resp.json())
    .then((dados) => setBackend(dados))
  
  }, [])

  
  
  return (
    <div> {/* conteiner */}
      <div> {/* div header*/}
        <h1>contatos</h1> 
      </div>

      <form onSubmit={submit}> {/* criar o form*/}
        <Input text='E-mail:' type='text' name='email' placeholder='E-mail' handleOnChange={sendEmail}/>
        <Input text='Numero:' type='Number' name='Numero' placeholder='Numero' handleOnChange={sendEmail}/>
        <Input text='Mensagem:' type='text' name='Mensagem' placeholder='Mesagem' handleOnChange={sendEmail}/>
        <Submitbutton text='Enviar' handleOnChange={submit}/>
      </form>
      {console.log(backend)}

    </div>
  )  
}

export default Contatos