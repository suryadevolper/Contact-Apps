import React from 'react'
import "./App.css"
import Navbar from './Component/Navbar'
import SlideNavbar from './Component/SlideNavbar'
import Form from './Component/Form'
import GetForm from './Component/GetForm'
import {Route, Routes } from 'react-router-dom'
import Edit from './Component/Edit'
import Fav from './Component/Fav'

export default function App() {

 
  return (
    <div id='home'>
      <Navbar/>
      <div id='main'>
        <SlideNavbar />
      
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/read' element={<GetForm/>}/>
        <Route path='/edit' element={<Edit/>}/>
        <Route path='/fav' element={<Fav/>}/>
      </Routes>
    </div>
    
    </div>
  )
}
