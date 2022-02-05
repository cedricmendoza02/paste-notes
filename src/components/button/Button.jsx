import React from 'react'
import './button.css'

function Button({value, onClick}) { 
    return value === "Save" ?
      (
        <button onClick={onClick}>Save</button>
      ) :
      (
        <button onClick={onClick}>Delete</button>
      )
  }

export default Button;
