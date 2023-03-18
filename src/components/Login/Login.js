import React, { useState } from 'react'
import { signInWithEmailAndPassword  } from "firebase/auth"
import { auth } from '../../firebase';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, steError] = useState(false)

    // const handleEmailChange = (event) => {
    //     setEmail(event.target.value);
    // };

    // const handlePasswordChange = (event) => {
    //     setPassword(event.target.value);
    // };

    const handleSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword (auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                steError(true)
            })
    };

    return (
        <div>
            <section id="login-page" className="login">
                <form id="login-form" action="" method="" onSubmit={handleSubmit}>
                    <fieldset>
                        <legend className='legend'>Login Form</legend>
                        <p className="field">
                            <label htmlFor="email">Email</label>
                            <span className="input">
                                <input type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    onChange={e=>setEmail(e.target.value)}
                                />
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
                                    onChange={e=>setPassword(e.target.value)}
                                />
                            </span>
                        </p>
                        <input className="button-submit" type="submit" value="Login" />
                        {error && <span>Wrong email or password!</span>}
                    </fieldset>

                </form>
            </section>
        </div>

    )
}


export default Login;