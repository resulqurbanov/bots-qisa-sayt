import "./style.scss"
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <h3>Start Bootstrap</h3>
            <nav ref={navRef}>
                <Link className='stil' to="/">HOME</Link>
                <Link className='stil' to="/about">ABOUT</Link>
                <i id='git' className="fa-brands fa-github"></i>
            </nav>
            <button className='open_btn' onClick={showNavbar}><i class="fa-solid fa-bars"></i></button>
        </header>
    )
}

export default Navbar