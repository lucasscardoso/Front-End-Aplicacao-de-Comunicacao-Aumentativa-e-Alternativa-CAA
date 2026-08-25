import { MenuProps } from "../interfaces/MenuProps";
import "../css/css-main.css"


export function Main({onSelecionarCategoria}: MenuProps){
    return(
        
    <div>
        <main className="titlecaa">
            <button onClick={() => onSelecionarCategoria ('necessidades')}>
                <img 
          src={'src/assets/imagens/sem-fundo-necessidade.png'} 
          alt="Ícone do Botão" 
          style={{ width: '500px', height: '500px' }} />
        </button>
            <button onClick={() => onSelecionarCategoria('saudacoes')}>  <img 
          src={'src/assets/imagens/saudacoes-sem-fundo.png'} 
          alt="Ícone do Botão" 
          style={{ width: '500px', height: '500px' }} /></button>
            <button onClick={() => onSelecionarCategoria('sentimentos')}>   <img 
          src={'src/assets/imagens/sentimentos-sem-fundo.png'} 
          alt="Ícone do Botão" 
          style={{ width: '500px', height: '500px' }} /></button>
            
           
        </main>
    </div>

    );
}