import React from 'react'
import Logo from './logo.png'

export default function Header(props) {
    return (

        <nav className='nav-bar'>
            <div className="head-container">
                <img className= 'logo' src={Logo} alt="logo" />
                <span>To-do List</span>
            </div>
            <div className='links'>
                <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                </ul>
            </div>
        </nav>
    );
}
