import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='flex items-center justify-between'>
                <Link to="/">
                    <span className='text-2xl'>R.B.B.S</span>
                </Link>
                <ul className='flex gap-5'>
                    <Link to="/">Home</Link>
                    <Link to="/Class">Class</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Contact">Contact</Link>
                    <Link to="/Courses">Courses</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;