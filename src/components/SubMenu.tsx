import { subOpcoes } from "../constants/opcoesData";
import { falarTexto } from "../constants/speech";
import { SubMenuProps } from "../interfaces/SubMenuProps";

 
 
 export function SubMenu({CategoriaSelecionada,onSelecionarCategoria}: SubMenuProps){
    return(
        <div>
            <main>
            <h2>{CategoriaSelecionada.toUpperCase()}: </h2>

            {subOpcoes[CategoriaSelecionada].map((opcao,index) => (
                <button key={index} onClick={() => falarTexto(opcao)}>
                {opcao}
                </button>
            ))}

            <button onClick={() => onSelecionarCategoria('')}> Voltar</button>

            </main>
  </div>
    );
 }
 