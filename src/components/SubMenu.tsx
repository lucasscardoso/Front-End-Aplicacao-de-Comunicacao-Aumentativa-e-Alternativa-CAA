import { subOpcoes } from "../constants/opcoesData";
import { falarTexto } from "../constants/speech";
import { SubMenuProps } from "../interfaces/SubMenuProps";
import { playClickSound } from "./audioUtils/ClickAudio";
import "../css/submenu.css"

 
 
 export function SubMenu({CategoriaSelecionada,onSelecionarCategoria}: SubMenuProps){
    return(
        <div className="submenu-main">
            <main>
            <h2 className="submenu-title">{CategoriaSelecionada.toUpperCase()}: </h2>

           <div className="submenu-grid">
          {subOpcoes[CategoriaSelecionada]?.map((opcao, index) => (
            <button
              key={index}
              className="submenu-card-button"
              onClick={() => falarTexto(opcao.texto)}
            >
              <img
                src={opcao.imagem}
                alt={opcao.texto || "Opção"}
              />
            </button>
          ))}
          <button className="submenu-back-button" onClick={() => {playClickSound(); onSelecionarCategoria('')}} > Voltar</button>

        </div>
            
            </main>
  </div>
    );
 }
 