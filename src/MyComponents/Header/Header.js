import React from 'react'

export default function Header(props) {
    return (

        <nav className='nav-bar'>
            <span>To-do List</span>
            <div className='links'>
                <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                </ul>
            </div>
        </nav>
    );
}
