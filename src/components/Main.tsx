import { MenuProps } from "../interfaces/MenuProps";
import "../css/css-main.css";
import necessidadesImg from "../assets/sem-fundo-necessidade.png";
import sentimentosImg from "../assets/sentimentos-sem-fundo.png";
import saudacoesImg from "../assets/saudacoes-sem-fundo.png";
import { playClickSound } from "./ClickAudio";

export function Main({ onSelecionarCategoria }: MenuProps) {
    
  return (
    <main>
      <div className="titlecaa">
        <button onClick={() => {playClickSound(); onSelecionarCategoria('necessidades')}}>
          <img src={necessidadesImg} alt="Necessidades" />
        </button>

        <button onClick={() => {playClickSound();onSelecionarCategoria('saudacoes')}}>
          <img src={saudacoesImg} alt="Saudações" />
        </button>

        <button onClick={() => {playClickSound();onSelecionarCategoria('sentimentos')}}>
          <img src={sentimentosImg} alt="Sentimentos" />
        </button>

        <button onClick={() => {playClickSound();onSelecionarCategoria('acoes')}}>
          <img src={sentimentosImg} alt="Ações" />
        </button>

        <button onClick={() => {playClickSound();onSelecionarCategoria('social')}}>
          <img src={sentimentosImg} alt="Social e Afeto" />
        </button>
      </div>
    </main>
  );
}