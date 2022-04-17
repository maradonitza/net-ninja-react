import MovieContextProvider from './contexts/MovieContext';
import Navbar from './components/MovieList';

function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <Navbar/>
      </MovieContextProvider>
    </div>
  );
}

export default App;
