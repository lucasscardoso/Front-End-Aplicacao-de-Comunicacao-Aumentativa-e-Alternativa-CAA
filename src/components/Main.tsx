import { MenuProps } from "../interfaces/MenuProps";
import "../css/css-main.css";

export function Main({ onSelecionarCategoria }: MenuProps) {
  return (
    <main className="titlecaa">
      <button onClick={() => onSelecionarCategoria('necessidades')}>
        <img 
          src={'src/assets/imagens/sem-fundo-necessidade.png'} 
          alt="Necessidades" 
        />
      </button>

      <button onClick={() => onSelecionarCategoria('saudacoes')}>
        <img 
          src={'src/assets/imagens/saudacoes-sem-fundo.png'} 
          alt="Saudações" 
        />
      </button>

      <button onClick={() => onSelecionarCategoria('sentimentos')}>
        <img 
          src={'src/assets/imagens/sentimentos-sem-fundo.png'} 
          alt="Sentimentos" 
        />
      </button>
    </main>
  );
}