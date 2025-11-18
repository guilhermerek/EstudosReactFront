import { Titulo } from '../Titulo/index.js';
import livrosAler from './books.js';
import CardInfos from '../CardInfos/index.js';
import './LivrosParaLer.css';
import bookImg from '../../images/book.png';

function LivrosParaLer() {
  return (
    <section>
      <Titulo cor={'#4634eb'} tamanhoFonte={'18px'}>
        Livros para Ler
      </Titulo>
      {livrosAler.map((livro) => (
        <div>
          <p className="InfoLivro">
            {livro.title} - {livro.isbn}
          </p>
          <img src={livro.src} alt={livro.title} />
        </div>
      ))}
      <CardInfos>
        title="O Senhor dos Anéis" anoPublicacao="2000" editora="HarperCollins
        Brasil" src={bookImg}
      </CardInfos>
    </section>
  );
}
export default LivrosParaLer;
