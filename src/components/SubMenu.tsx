
import { falarTexto } from "../constants/speech";
import { SubMenuProps } from "../interfaces/SubMenuProps";

 
 
 export function SubMenu({CategoriaSelecionada,botoesDaCategoria = [],onSelecionarCategoria}: SubMenuProps){
    return(
        <div>
            <main>
            <h2>{CategoriaSelecionada.toUpperCase()}: </h2>

           {botoesDaCategoria.map((botao) => (
                    <button
                        key={botao.id} 
                        onClick={() => falarTexto(botao.speechText)}
                        style={{ marginBottom: "12px", display: "inline-block" }}
                    >
                        {botao.label} {}
                    </button>
              ))}

         <button onClick={() => onSelecionarCategoria("")}>Voltar</button>
      </main>
    </div>

    );
 }
 