import PokemonAPI from './components/PokemonAPI';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PokemonAPI />
      </header>
    </div>
  );
}

export default App;
