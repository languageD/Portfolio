import React from "react";

function input({text, name, type, handleOnChange, placeholder}){
  return(
    <form>
      <label htmlFor={name}>{text}</label>
      <input type={type} name={name} onChange={handleOnChange} placeholder={placeholder} />
    </form>
  )
}


export default input