import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Content from './Components/Content';

class App extends Component {

  changeTitle (newTitle) {
    document.title = newTitle;
  }

  render() {
    return (
      <>
        <Content changeTitle={this.changeTitle}/>
        {/* <img src={logo} /> */}
      </>
    ) 
  }
}

export default App;
