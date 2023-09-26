import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import OtherProject from './components/OtherProjects';
import Projects from './components/Projects';

function App() {
  const color = 'brand';
  return (
    <>
      <NavBar color={color}/>
      <Hero color={color}/>
      <About color={color} />
      <Experience color={color} />
      <Projects color={color} />
      <OtherProject color={color} />
      <Contact color={color} />
      <Footer color={color} />
    </>
  );
}

export default App;
