import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav shadow-xl" >
            <div className='left'><h3>Sparks Bank</h3></div>
            <div className='right'>
                <Link to='/' className='nav-link'>HOME</Link>
                <Link to='/transac' className='nav-link'>TRANSFER</Link>
                <Link to='/history' className='nav-link'>HISTORY</Link>
            </div>
        </div>
    )
}

export default Navbar