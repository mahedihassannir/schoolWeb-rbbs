import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contexM } from '../authProvider/Contex';

const Header = () => {

    let { user, handleLogout } = useContext(contexM)


    let logout = () => {

        handleLogout()
            .then(res => {
                let singOut = res.user
                console.log(singOut);
            })
            .catch(err => {
                console.log(err);
            })
    }


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


                    {
                        user ? <span>{user.email}</span> : <Link to="/Login">Login  </Link>
                    }

                    {
                        user &&

                        <div>
                            <button onClick={logout}>logout</button>
                        </div>


                    }

                </ul>
            </nav>
        </div>
    );
};

export default Header;