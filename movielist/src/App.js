import MovieContextProvider from './contexts/MovieContext';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import NewMovieForm from './components/NewMovieForm';

function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <Navbar/>
        <MovieList />
        <NewMovieForm/>
      </MovieContextProvider>
    </div>
  );
}

export default App;
