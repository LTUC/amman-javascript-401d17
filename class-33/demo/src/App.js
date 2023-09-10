import './App.css';
import Auth from './components/Auth';
import Login from './components/Login';
import LoginProvider from './context/AuthContext';

function App() {
  return (
    <LoginProvider>
      <h1>Hello Class 33, 34</h1>

      <Login />

      <Auth capability='create'>
        User with create access can see this message!
      </Auth>

      <Auth>
        Any valid user can see this message!
      </Auth>

      <Auth capability='update'>
        User with update access can see this message!
      </Auth>
      
      <Auth capability='delete'>
        User with delete access can see this message!
      </Auth>
    </LoginProvider>
  );
}

export default App;
