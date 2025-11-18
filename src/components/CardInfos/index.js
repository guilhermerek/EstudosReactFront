import styled from 'styled-components';
import { Titulo } from '../Titulo';

const Card = styled.div`
  align-items: center;
  background-color: #f5f5f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  margin: 10px auto 20px auto;
  max-width: 500px;
  padding: 25px 20px;
  justify-content: space-around;
  width: 100%;
`;

const Ano = styled.p`
  width: 300px;
`;

const Editora = styled.p`
  width: 300px;
`;

const Img = styled.img`
  width: 100px;
`;

const Botao = styled.button`
  background-color: #4634eb;
  color: #000;
  padding: 10px 0px;
  font-size: 13px;
  border: none;
  font-weight: 900;
  display: block;
  text-align: center;
  width: 100px;
  &:hover {
    cursor: pointer;
  }
`;

function CardInfos({ titulo, anoPublicacao, editora, img }) {
  return (
    <Card>
      <div>
        <Titulo cor={'#4634eb'} tamanhoFonte={'18px'}>
          {titulo}
        </Titulo>
        <Ano>{anoPublicacao}</Ano>
        <Editora>{editora}</Editora>
      </div>
      <div>
        <Img src={img} />
        <Botao>Veja mais informacoes</Botao>
      </div>
    </Card>
  );
}
export default CardInfos;
