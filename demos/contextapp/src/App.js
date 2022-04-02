import './App.css';
import BookList from './components/BookList';
import MovieList from './components/MovieList';
import AuthContextProvider from './contexts/AuthContext';
import LanguageContextProvider from './contexts/LanguageContext';

function App() {
  return (
    <div className="App">
      <LanguageContextProvider>
        <AuthContextProvider>
          <BookList />
          <MovieList />
        </AuthContextProvider>
      </LanguageContextProvider>      
    </div>
  );
}

export default App;
