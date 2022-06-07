import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav>
            <div className='logo-div'>
                <h2 className='logo-name'>BOiPORi</h2>
            </div>
            <div className='link-div'>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "link-id")}
                    to='/'>
                    Home
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? "active-link" : "link-id")}
                    to='/reviews'
                >
                    Reviews
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? "active-link" : "link-id")}
                    to='/dashboard'
                >
                    Dashboard
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? "active-link" : "link-id")}
                    to='/blogs'
                >
                    Blogs
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? "active-link" : "link-id")}
                    to='/about'
                >
                    About
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;