import './App.css';
import Content from './Components/Content';

import './style.scss';

function App() {

  const changeTitle = (newTitle) => {
    document.title = newTitle;
  }

  return (
    <>
    <header>
      <nav>
        <a>Home</a>
      </nav>
    </header>
      <Content changeTitle={changeTitle} />
      {/* <img src={logo} /> */}

      <footer>
        <a>Footer</a>
      </footer>
    </>
  )
}

export default App;
