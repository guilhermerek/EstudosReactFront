import './App.css';
import Cabecalho from './components/Cabecalho/index.js';
import LivrosParaLer from './components/LivrosParaLer/index.js';
import Search from './components/Search/index.js';

function App() {
  return (
    <div className="app">
      <Cabecalho></Cabecalho>
      <Search></Search>
      <LivrosParaLer></LivrosParaLer>
    </div>
  );
}

export default App;
