import React, { useState } from 'react'


const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <div>
    <section id="register-page" className="register">
        <form id="register-form" action="" method="" >
            <fieldset>
                <legend className='legend'>Register Form</legend>
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
                <p className="field">
                    <label htmlFor="repeat-pass">Repeat Password</label>
                    <span className="input">
                        <input
                            type="password"
                            name="confirmPass"
                            id="repeat-pass"
                            placeholder="Repeat Password"
                        />
                    </span>
                </p>
                <input
                    className="button-submit"
                    type="submit"
                    value="Register"
                />
            </fieldset>
        </form>
    </section>
</div>
  )
}

export default Register;