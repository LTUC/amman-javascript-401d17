import logo from './logo.svg';
import './App.css';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import BookContextProvider from './context/BookContext';
import Header from './components/Header';

function App() {
  return (
    <BookContextProvider>
      <Header />
      <BookList />
      <BookForm />
    </BookContextProvider>
  );
}

export default App;
