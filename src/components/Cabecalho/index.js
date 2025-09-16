import './cabecalho.css';
import Logo from '../Logo/index.js';
import ItensMenu from '../ItensMenu/index.js';
import IconesMenu from '../IconesMenu/index.js';

function Cabecalho() {
  return (
    <header className="app-header">
      <Logo></Logo>
      <nav className="menu-nav">
        <ItensMenu></ItensMenu>
        <IconesMenu></IconesMenu>
      </nav>
    </header>
  );
}

export default Cabecalho;
