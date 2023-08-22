import './App.css';
import ClassComponent from './components/ClassComponent';
import Person from './components/Person';

function App() {
  return (
    <div>
      <ClassComponent />
      <br />
      <Person name='Ihab' age={24}/>
      {/* <Person /> */}
    </div>
  );
}

export default App;
