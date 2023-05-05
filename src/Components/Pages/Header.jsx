import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contexM } from '../authProvider/Contex';

const Header = () => {

    let { user } = useContext(contexM)

    return (
        <div>
            <nav className=' text-white h-20 px-20 flex items-center justify-between'>
                <Link to="/">
                    <span className='text-2xl'>R.B.B.S</span>
                </Link>
                <ul className='flex gap-5'>
                    <Link to="/">Home</Link>
                    <Link to="/Class">Class</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Contact">Contact</Link>
                    <Link to="/Courses">Courses</Link>
                    <Link to="/Login">Login</Link>

                    {
                        user ? "mahedi" : "no user"
                    }

                </ul>
            </nav>
        </div>
    );
};

export default Header;