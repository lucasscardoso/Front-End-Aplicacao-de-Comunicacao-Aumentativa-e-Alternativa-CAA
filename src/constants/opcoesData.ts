import fomeimg from "../assets/humano/necessidades/fome-sem-fundo.png"
import sedeimg from "../assets/humano/necessidades/sede-sem-fundo.png"
import dorimg from "../assets/humano/necessidades/dor-sem-fundo.png"
import dormirimg from "../assets/humano/necessidades/dormir-sem-fundo.png"
import banheiroimg from "../assets/humano/necessidades/banheiro-sem-fundo.png"

export interface SubOpcaoItem {
  texto: string;
  imagem: string;
}

 export const subOpcoes: Record<string, SubOpcaoItem[]> = {
    necessidades: [
      
        {texto: 'Eu estou com Fome', imagem:fomeimg} ,
        {texto: 'Eu estou com Sêde', imagem:sedeimg} ,
        {texto: 'Eu estou com Dor', imagem:dorimg} ,
        {texto: 'Eu quero dormir', imagem:dormirimg} ,
        {texto: 'Eu quero ir ao Banheiro', imagem:banheiroimg},
      ], 
    
 };