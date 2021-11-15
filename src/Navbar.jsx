import React, { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
const [show, handleShow] = useState(false)
const transitionNavbar = () => {
    if(window.scrollY > 100){
        handleShow(true)
    }else{
        handleShow(false)
    }
}

useEffect(() => {
    window.addEventListener('scroll',transitionNavbar);
    return () => { window.removeEventListener('scroll',transitionNavbar)}
}, []);

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className='nav'>
                <div className="nav__contents">
                <img className='nav__logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" />
                <img className='nav__avatar' src="https://ih0.redbubble.net/image.618363037.0853/flat,1000x1000,075,f.u2.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar 
