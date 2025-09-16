import './app.css';
import Cabecalho from './components/Cabecalho/index.js';
import Search from './components/Search/index.js';

function App() {
  return (
    <div className="app">
      <Cabecalho></Cabecalho>
      <Search></Search>
    </div>
  );
}

export default App;
