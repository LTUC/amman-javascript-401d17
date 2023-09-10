import React, { useContext } from 'react'
import { LoginContext } from '../context/AuthContext'

function Auth(props) {
  const loginContext = useContext(LoginContext);

  console.log(loginContext.can(props.capability))
  const canDo = props.capability ? loginContext.can(props.capability) : true;
  const authinticated = canDo && loginContext.loggedIn;

  return (
    authinticated &&
    <div>
      {props.children}
    </div>
  )
}

export default Auth