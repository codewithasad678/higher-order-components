import './App.css';
import MoviesThumbNail from './components/MoviesThumbNail';
import MoviesTitle from './components/MoviesTitle';

function App() {
  return (
    <div className="App">
      <MoviesTitle />
      <MoviesThumbNail />
    </div>
  );
}

export default App;
