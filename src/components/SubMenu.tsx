import { subOpcoes } from "../constants/opcoesData";
import { falarTexto } from "../constants/speech";
import { SubMenuProps } from "../interfaces/SubMenuProps";
import { playClickSound } from "./audioUtils/ClickAudio";

 
 
 export function SubMenu({CategoriaSelecionada,onSelecionarCategoria}: SubMenuProps){
    return(
        <div>
            <main>
            <h2>{CategoriaSelecionada.toUpperCase()}: </h2>

            {subOpcoes[CategoriaSelecionada].map((opcao,index) => (
                <button key={index} onClick={() => falarTexto(opcao)} style={{ marginBottom: '12px' }}>
                {opcao}
                </button>
            ))}

            <button onClick={() => {playClickSound(); onSelecionarCategoria('')}} > Voltar</button>

            </main>
  </div>
    );
 }
 