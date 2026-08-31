import { MenuProps } from "../interfaces/MenuProps";
import "../css/css-main.css";
import necessidadesImg from "../assets/botoes/sem-fundo-necessidade.png";
import sentimentosImg from "../assets/botoes/sentimentos-sem-fundo.png";
import saudacoesImg from "../assets/botoes/saudacoes-sem-fundo.png";
import acoesImg from "../assets/botoes/acoes.png";
import socialImg from "../assets/botoes/social.png";
import { playClickSound } from "./audioUtils/ClickAudio";

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
          <img src={acoesImg} alt="Ações" />
        </button>

        <button onClick={() => {playClickSound();onSelecionarCategoria('social')}}>
          <img src={socialImg} alt="Social e Afeto"  />
        </button>
      </div>
    </main>
  );
}