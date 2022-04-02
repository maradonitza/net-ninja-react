import './App.css';
import BookList from './components/BookList';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BookList />
      </AuthContextProvider>      
    </div>
  );
}

export default App;
