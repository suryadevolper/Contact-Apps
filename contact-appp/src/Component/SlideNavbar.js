import React from 'react'
import "../Component/SlideNavbar.css"

 

export default function SlideNavbar() {


    return (
        <div id='slide'>
            <a href='/'><button id='create'  ><i class="fa-solid fa-plus fa-xl"></i>Create</button></a>
            <br></br>
            <br></br>
            <div id='slide_bar'>
                <div id='slide_nav'>
                    <a  href='/read' ><button ><span><i class="fa-solid fa-user fa-lg"></i></span>Contact</button></a>
                    
                </div>
                <div id='slide_nav'>
                    <a  href='/fav' ><button ><span><i class="fa-solid fa-heart fa-lg"></i></span>Favorite</button></a>
                    
                </div>
            </div>
        </div>
    )
}
