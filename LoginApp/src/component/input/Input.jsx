import React from 'react'
import {useRef,useState} from "react"
import "./style.scss"

function Input(props) {

   

  return (
    <div className='Input-Box'>
        
        <input 
       
         {...props}
        ></input>
    </div>
  )
}

export default Input