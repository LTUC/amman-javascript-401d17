import React from 'react';

export const ThemeContext = React.createContext();

console.log(ThemeContext);

class Theme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'dark',
      modeToggle: this.modeToggle
    }
  }

  modeToggle = () => {
    this.setState({
      mode: this.state.mode === 'dark' ? 'light' : 'dark'
    })
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default Theme;