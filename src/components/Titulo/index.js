import styled from 'styled-components';

export const Titulo = styled.h3`
  text-align: center;
  widht: 100%;
  color: ${(props) => props.cor || '#000'};
  font-size: ${(props) => props.tamanhoFonte || '24px'};
  text-shadow: 5px 5px 2px rgba(0, 0, 0, 0.2);
`;
