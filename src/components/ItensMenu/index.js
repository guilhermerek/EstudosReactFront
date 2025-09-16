import './itensMenu.css';

const opcoesMenu = ['Pendentes', 'Concluídos', 'Em Andamento'];

function ItensMenu() {
  return (
    <ul className="menu">
      {opcoesMenu.map((opcao, index) => (
        <li key={index} className="item-menu">
          <p>{opcao}</p>
        </li>
      ))}
    </ul>
  );
}

export default ItensMenu;
