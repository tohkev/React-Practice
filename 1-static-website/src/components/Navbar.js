import React from 'react';
import navLogo from '../img/react-logo.png';

export default function Navbar() {
    return (
        <nav className="nav-bar">
            <img src={navLogo} alt="Logo" className="nav-logo" />
            <h3 className="nav-text">ReactFacts</h3>
            <h4 className="nav-title">React Course - Project 1</h4>
        </nav>
    )
}