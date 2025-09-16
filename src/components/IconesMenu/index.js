import './iconesMenu.css';
import edit from '../../images/setting.svg';
import users from '../../images/user.svg';

const iconesMenu = [edit, users];

function IconesMenu() {
  return (
    <ul className="icones">
      {iconesMenu.map((opcao, index) => (
        <li key={index} className="icone-li">
          <p>
            <img className="icone-menu" src={opcao} />
          </p>
        </li>
      ))}
    </ul>
  );
}

export default IconesMenu;
