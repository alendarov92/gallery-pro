import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (


        <nav className='nav'>
            <div className='nav-bar'>
                <div className='home'>
                    <Link to="/">Home</Link>
                </div>
                <div className='categories'>
                    <Link to="/myPhotos">My Photos</Link>
                    <Link to="/create">Create</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/logout">Logout</Link>
                    <Link to="/register">Register</Link>

                </div>
            </div>

        </nav>

    )
}

export default Header;