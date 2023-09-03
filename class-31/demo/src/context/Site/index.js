import React, { useState } from 'react';

export const SiteContext = React.createContext();

export default function SiteProvider(props) {
  // const state = {
  //   title: 'Context API Demo',
  //   twitter: 'LTUC'
  // };

  const [state, setState] = useState({
    title: 'Context API Demo',
    twitter: 'LTUC'
  })

  const changeTitle = () => {
    console.log('form inside the context')
  }


  return (
    <SiteContext.Provider value={{state, setState, changeTitle}}>
      {props.children}
    </SiteContext.Provider>
  )
}