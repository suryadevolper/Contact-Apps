import React, { useState } from 'react'
import "./Form.css"
import axios from 'axios';
import { API } from './API';
export default function Form() {


    const [User,setUser]=useState();
    const [Phone,setPhone]=useState();
    const [Mail,setMail]=useState();
    const [Year,setYear]=useState();
    

        function sub(e){
            e.preventDefault();
            axios.post(API, {user:User, call:Phone,mail:Mail,dob:Year})
            setUser('')
            setPhone('')
            setMail('')
            setYear('')
        }


        
  return (
    <div id='Form'>
        <div>
            <h2>Form</h2>
            <form onSubmit={sub}>
                <label><i class="fa-solid fa-user fa-lg"></i></label>
                <input className="form-control" type='text' value={User} onChange={(e)=>setUser(e.target.value)} required placeholder='FirstName'/>
                <br></br>
                <label><i class="fa-solid fa-phone fa-lg"></i></label>
                <input className='form-control' type='number'  value={Phone} onChange={(e)=>setPhone(e.target.value)} required placeholder='Phone'/>
                <br></br>
                <label><i class="fa-regular fa-envelope fa-lg"></i></label>
                <input className='form-control' type='mail' value={Mail}  onChange={(e)=>setMail(e.target.value)} required placeholder='Email'/>
                <br></br>
                <label><i class="fa-solid fa-cake-candles fa-lg"></i></label>
                <input className='form-control' type='date' value={Year} onChange={(e)=>setYear(e.target.value)} required placeholder='Day' min={1} max={31}  />
                <br></br>
                <button id='submit' className='sub'>Submit</button>
            </form>
        </div>
    </div>
  )
}
