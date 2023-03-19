import React, { useContext } from 'react'
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';

const Header = () => {

    const { currentUser } = useContext(AuthContext)
    return (


        <nav className='nav'>
            <div className='nav-bar'>
                <div className='home'>
                    <Link to="/">Home</Link>
                </div>
                <div className='categories'>

                    {currentUser
                        ?
                        <>
                            <span className='welcome'>Welcome: { currentUser.email}</span>
                            <Link to="/myPhotos">My Photos</Link>
                            <Link to="/create">Create</Link>
                            <Link to="/logout">Logout</Link>
                        </>
                        :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </>

                    }

                </div>
            </div>

        </nav>

    )
}

export default Header;

{/* {currentUser
                        ?
                        <>
                            <Link to="/myPhotos">My Photos</Link>
                            <Link to="/create">Create</Link>
                            <Link to="/logout">Logout</Link>
                        </>
                        :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </>

                    } */}