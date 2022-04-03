import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='d-flex justify-content-around p-5'>
            <NavLink  className={({ isActive }) => (isActive ? "active-link" : "link")} to='/'>Home</NavLink>

            <NavLink  className={({ isActive }) => (isActive ? "active-link" : "link")} to='/reviews'>Reviews</NavLink>

            <NavLink  className={({ isActive }) => (isActive ? "active-link" : "link")} to='/dasboard'>DashBoard</NavLink>

            <NavLink  className={({ isActive }) => (isActive ? "active-link" : "link")} to='/blogs'>Blogs</NavLink>
        </nav>
    );
};

export default Header;