import "./Edit.css"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { API } from './API';
import { useNavigate } from 'react-router-dom';




export default function Edit() {

    
    const [User, setUser]=useState();
    const [Phone,setPhone]=useState();
    const [Mail,setMail]=useState();
    const [Year,setYear]=useState();
    const [id,setId]=useState(0)
    
const navi = useNavigate()
        function sub(e){
            e.preventDefault();
           axios.put(`${API}/${id}`,{user:User, call:Phone,mail:Mail,dob:Year})
            setUser('')
            setPhone('')
            setMail('')
            setYear('');
            
            navi('/')
        }

        useEffect(()=>{
             setId(localStorage.getItem('id'))
            setUser(localStorage.getItem('name'))
            setPhone(localStorage.getItem('call'))
            setMail(localStorage.getItem('mail'))
            setYear(localStorage.getItem('age'))
           
        },[])

  return (
        <div id='Form'>
        <div>
            <h2>Edit</h2>
            <form onSubmit={sub}>
                <label><i class="fa-solid fa-user fa-lg"></i></label>
                <input className='form-control' type='text' value={User} onChange={(e)=>setUser(e.target.value)} required placeholder='FirstName'/>
                <br></br>
                <label><i class="fa-solid fa-phone fa-lg"></i></label>
                <input className='form-control' type='number'  value={Phone} onChange={(e)=>setPhone(e.target.value)} required placeholder='Phone'/>
                <br></br>
                <label><i class="fa-regular fa-envelope fa-lg"></i></label>
                <input className='form-control' type='mail' value={Mail}  onChange={(e)=>setMail(e.target.value)} required placeholder='Email'/>
                <br></br>
                <label><i class="fa-solid fa-cake-candles fa-lg"></i></label>
                <input className='form-control' type='date' value={Year} onChange={(e)=>setYear(e.target.value)} required placeholder='Day' min={1} max={31} />
                <br></br>
                <button id='submit' className='sub'>Submit</button>
            </form>
        </div>
    </div>
  )
}
