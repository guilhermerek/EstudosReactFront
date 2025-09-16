import { useState } from 'react';
import './search.css';
import Input from '../Input/index.js';
import livros from './bookData.js';

function Search() {
  const [livrosPesquisa, setLivrosPesquisa] = useState([]);

  return (
    <section className="search">
      <h2>O que deseja encontrar?</h2>
      <h3>Encontre o que precisar em nosso site.</h3>
      <Input
        placeholder="Buscar"
        onBlur={(e) => {
          const inputTexto = e.target.value;
          const resultadoPesquisa = livros.filter((livro) =>
            livro.title.includes(inputTexto)
          );
          setLivrosPesquisa(resultadoPesquisa);
        }}
      ></Input>
      <p>{console.log(livrosPesquisa)}</p>
    </section>
  );
}

export default Search;
