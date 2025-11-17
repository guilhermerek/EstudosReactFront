import { Titulo } from '../Titulo/index.js';
import livrosAler from './books.js';
import './LivrosParaLer.css';

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
    </section>
  );
}
export default LivrosParaLer;
