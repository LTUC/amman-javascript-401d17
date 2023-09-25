import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import NavBar from './components/NavBar';

function App() {
  const color = 'purple';
  return (
    <>
      <NavBar color={color}/>
      <Hero color={color}/>
      <About color={color} />
    </>
  );
}

export default App;
