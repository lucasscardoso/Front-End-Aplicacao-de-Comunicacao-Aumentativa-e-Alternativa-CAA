import { MenuProps } from "../interfaces/MenuProps";
import "../css/css-main.css";
import necessidadesImg from '../assets/sem-fundo-necessidade.png'
import sentimetosImg from '../assets/sentimentos-sem-fundo.png'
import saudacoesImg from '../assets/saudacoes-sem-fundo.png'

export function Main({ onSelecionarCategoria }: MenuProps) {
  return (
    <main className="titlecaa">
      <button onClick={() => onSelecionarCategoria('necessidades')}>
        <img 
          src={necessidadesImg} 
          alt="Necessidades" 
        />
      </button>

      <button onClick={() => onSelecionarCategoria('saudacoes')}>
        <img 
          src={saudacoesImg} 
          alt="Saudações" 
        />
      </button>

      <button onClick={() => onSelecionarCategoria('sentimentos')}>
        <img 
          src={sentimetosImg} 
          alt="Sentimentos" 
        />
      </button>
    </main>
  );
}