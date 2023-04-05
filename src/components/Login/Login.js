import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, steError] = useState(false);

    const navigate = useNavigate();

    const {dispatch} = useContext(AuthContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        if (email == '' || password == '') {
            window.alert('All fields are required');
        }
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                dispatch({type:"LOGIN", payload:user})
                navigate('/')
            })
            .catch((error) => {
                steError(true)
            });
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
                                    onChange={e => setEmail(e.target.value)}
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
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </span>
                        </p>
                        <input className="button-submit" type="submit" value="Login" />
                        <span >Don't have an account <Link to={'/register'}>Sign Up</Link></span>
                        {error && <span>Wrong email or password!</span>}
                    </fieldset>

                </form>
            </section>
        </div>

    );
};


export default Login;