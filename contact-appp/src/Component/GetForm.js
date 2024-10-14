import "./GetForm.css"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API } from './API'
import { useNavigate } from "react-router-dom"



export default function GetForm() {

    const [Name, setName] = useState([])

    useEffect(() => {
        axios.get(API).then((y) => {
            console.log(y);
            setName(y.data)
        })
    }, [])

    function del(id) {
        axios.delete(`${API}/${id}`).then(() => (
            axios.get(API).then((y) => {
                console.log(y.data);
                setName(y.data)

            })
        ))

    }

    const navi = useNavigate()
    
    function b(a,b,c,d,e){
        localStorage.setItem('id',a)
        localStorage.setItem('name',b);
        localStorage.setItem('call',c);
        localStorage.setItem('mail',d);
        localStorage.setItem('age',e);
        navi('/edit')
        
    }
   
 
    return (
        <div>
            <div>
            <h2>Details</h2>
                <table id="tbl">
                    <tr>
                        <th className="expelliarmus">Favorite</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th className="expelliarmus">Email</th>
                        <th className="expelliarmus">Age</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    {Name.map((r) => (
                        <tr id='tabel'>
                            <td className="expelliarmus"><input type="checkbox"/></td>
                            <td>{r.user}</td>
                            <td>{r.call}</td>
                            <td className="expelliarmus">{r.mail}</td>
                            <td className="expelliarmus">{r.dob}</td>
                            <td><button className="btn" onClick={()=> b(r.id,r.user,r.call,r.mail,r.dob)}><i class="fa-solid fa-pen"></i></button></td>
                            <td><button className="btn" onClick={()=> del(r.id)}><i class="fa-solid fa-trash"></i></button></td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    )
} 