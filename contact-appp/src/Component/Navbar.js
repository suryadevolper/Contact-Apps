import React, { useState } from 'react'
import images from "./Images/images-removebg-preview.png"
import "./Navbar.css"

export default function Navbar() {

  const [Input, setInput]=useState('')

  function h(e){
    e.preventDefault()
    localStorage.setItem('data',Input)
  }
  return (
    <div>
     
        <div  id='navbar'>
            <img src={images} />
            <h2>Contact</h2>
            <form onSubmit={h}>
            <input className='input_head' type='text' value={Input}  onChange={(e)=>setInput(e.target.value)} placeholder='Search' />
            </form>
        </div>
        
    </div>
  )
}
