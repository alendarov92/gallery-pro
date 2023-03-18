import React, { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
    };

    return (
        <div>
            <section id="login-page" className="login">
                <form id="login-form" action="" method="">
                    <fieldset>
                        <legend className='legend'>Login Form</legend>
                        <p className="field">
                            <label htmlFor="email">Email</label>
                            <span className="input">
                                <input type="text" name="email" id="email" placeholder="Email" />
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="password">Password</label>
                            <span className="input">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                />
                            </span>
                        </p>
                        <input className="button-submit" type="submit" value="Login" />
                    </fieldset>
                </form>
            </section>
        </div>
        
    )
}


export default Login;