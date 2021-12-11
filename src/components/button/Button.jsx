import React from 'react'
import './button.css'

function Button(props) { 
    return props.value === "Save" ?
      (
        <button onClick={props.onClick}>Save</button>
      ) :
      (
        <button onClick={props.onClick}>Delete</button>
      )
  }

export default Button;
