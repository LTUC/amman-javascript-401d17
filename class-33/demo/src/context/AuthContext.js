import axios from "axios";
import { createContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import cookie from 'react-cookies';

export const LoginContext = createContext();

export default function LoginProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [capabilities, setCapabilities] = useState([])


  // Read, Create, Update, Delete
  const can = (capability) => {
    return capabilities?.includes(capability);
  }

  const login = async (user, pass) => {
    // console.log(user, pass)
    // console.log(btoa(`${user}:${pass}`))
    try {
      const userRes = await axios.post(
        'http://localhost:3001/signin',
        {},
        {
          headers: {Authorization: `Basic ${btoa(`${user}:${pass}`)}`}
        }
      )

      // console.log(userRes)
      ValidateToken(userRes.data.token, userRes.data.user)
    } catch(error) {
      console.log(error)
    }
  }

  const logout = () => {
    setLoggedIn(false);
    setUser({})
    cookie.remove('auth')
  }

  const ValidateToken = (token, user) => {
    try {
      const tokenChecker = jwtDecode(token);
      // console.log(tokenChecker)
      if(tokenChecker) {
        setUser(user);
        setLoggedIn(true);
        setCapabilities(tokenChecker.capabilities);

        cookie.save('auth', token)
      }
    } catch(e) {
      console.log(e)
    }
  }

  // console.log(loggedIn, capabilities)
  useEffect(()=> {
    const authCookie = cookie.load('auth');
    if(authCookie) {
      ValidateToken(authCookie)
    } else {
      setLoggedIn(false)
    }
  }, [])

// console.log(loggedIn)
  return (
    <LoginContext.Provider value={{ loggedIn, login, logout, can }}>
      {children}
    </LoginContext.Provider>
  )
}