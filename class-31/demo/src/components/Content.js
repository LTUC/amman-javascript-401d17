import React, { useContext } from 'react';
import { ThemeContext } from '../context/Theme';
import { SiteContext } from '../context/Site';

export default function Content() {

  const theme = useContext(ThemeContext)
  const site = useContext(SiteContext)

  return (
    <div>
      <h1>{site.state.title}</h1>
      <a>@{site.state.twitter}</a>

      <button onClick={() => site.setState({title: 'Hasan', twitter: 'hassan'})}>Change the twitter account</button>

      {/* <ThemeContext.Consumer>
        {theme => ( */}
          <h2>Current mode: <button onClick={theme.modeToggle}>{theme.mode}</button></h2>
        {/* )
        }
      </ThemeContext.Consumer> */}
    </div>
  )
}
