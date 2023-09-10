import React, { useContext, useState } from 'react';
import { LoginContext } from '../context/AuthContext';

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginContext = useContext(LoginContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginContext.login(username, password)
  }
  return (
    <>
      {
        loginContext.loggedIn ?
          <button onClick={loginContext.logout}>Logout</button>
          :
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Enter your username!!'
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type='password'
              placeholder='Enter you password!!'
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Login</button>
          </form>
      }
    </>
  )
}

export default Login