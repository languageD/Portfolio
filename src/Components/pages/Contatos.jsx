import React from "react";
import { useState } from "react";
import Input from "../form/Input";


function Contatos(){

  const [email, setemail] = useState('')

  function submit(e){
    e.preventDafault()
  }

  function sendEmail(e){
    setemail(
      e.target.value
    )
  } 

  
  
  return (
    <div> {/* conteiner */}
      <div> {/* div header*/}
        <h1>contatos</h1> 
      </div>

      <form onSubmit={submit}> {/* criar o form*/}
        <Input text='E-mail:' type='text' name='email' placeholder='E-mail' handleOnChange={sendEmail}/>
        <Input text='Mensagem:' type='text' name='Mensagem' placeholder='Mesagem' handleOnChange={sendEmail}/>
      </form>

    </div>
  )  
}

export default Contatos