import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../firebase';
import { Link } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [error, steError] = useState(false)



    const handleSubmit = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                if (password !== confPassword) {
                    steError(true)
                }
            });
    };

    return (
        <div>
            <section id="register-page" className="register">
                <form id="register-form" action="" method="" onSubmit={handleSubmit} >
                    <fieldset>
                        <legend className='legend'>Register Form</legend>
                        <p className="field">
                            <label htmlFor="email">Email</label>
                            <span className="input">
                                <input type="text" name="email" id="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
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
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="repeat-pass">Repeat Password</label>
                            <span className="input">
                                <input
                                    type="password"
                                    name="confirmPass"
                                    id="repeat-pass"
                                    placeholder="Repeat Password"
                                    onChange={e => setConfPassword(e.target.value)}
                                />
                            </span>
                        </p>
                        <input
                            className="button-submit"
                            type="submit"
                            value="Register"
                        />
                        <span>Allredy have an account <Link to={'/login'}>Sign In</Link></span>
                        {error && <span>Password's dont match!</span>}
                    </fieldset>
                </form>
            </section>
        </div>
    )
}

export default Register;