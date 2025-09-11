import logo from '../../images/book.png';
import './logo.css';

function Logo() {
  return (
    <div className="app-logo">
      <img className="logo" src={logo} alt="Figura logotipo" />
      <p>
        <strong>Biblioteca</strong>
      </p>
    </div>
  );
}
export default Logo;
