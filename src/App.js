import './app.css';
import Logo from './components/Logo/index.js';
import edit from './images/setting.svg';
import users from './images/user.svg';

const opcoesMenu = ['Home', 'Pendentes', 'Concluídos', 'Em Andamento'];
const iconesMenu = [edit, users];

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Logo />
        <nav className="menu-nav">
          <ul className="menu">
            {opcoesMenu.map((opcao) => (
              <li className="item-menu">
                <p>{opcao}</p>
              </li>
            ))}
          </ul>

          <ul className="icones">
            {iconesMenu.map((opcao) => (
              <li className="icone-li">
                <p>
                  <img className="icone-menu" src={opcao}></img>
                </p>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
