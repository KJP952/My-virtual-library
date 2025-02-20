import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="name">
                    BookMatch
                </a>
            </div>
            <div className="navbar-center">
                <ul className="nav-links">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/library">Library</a>
                    </li>
                    <li>
                        <a href="/about">About Us</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <a href="/Login" className="signin-button">
                    Log In
                </a>
                <a href="/signUp" className="user-icon">
                    Sign Up
                </a>
            </div>
        </nav>
    );
};

export default Navbar;