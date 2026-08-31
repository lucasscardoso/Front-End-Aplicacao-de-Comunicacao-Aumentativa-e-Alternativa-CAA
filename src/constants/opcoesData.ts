//necessidades
import fomeimg from "../assets/humano/necessidades/fome-sem-fundo.png"
import sedeimg from "../assets/humano/necessidades/sede-sem-fundo.png"
import dorimg from "../assets/humano/necessidades/dor-sem-fundo.png"
import dormirimg from "../assets/humano/necessidades/dormir-sem-fundo.png"
import banheiroimg from "../assets/humano/necessidades/banheiro-sem-fundo.png"

//saudacoes
import diaimg from  "../assets/humano/saudacoes/bomdia-sem-fundo.png"
import tardeimg from "../assets/humano/saudacoes/boatarde-sem-fundo.png"
import noiteimg from "../assets/humano/saudacoes/boanoite-sem-fundo.png"
import olaimg from "../assets/humano/saudacoes/ola-sem-fundo.png"
import tchauimg from "../assets/humano/saudacoes/tchau-sem-fundo.png"

//acoes
import ajudaimg from "../assets/humano/acoes/ajuda-sem-fundo.png"
import pegarimg from "../assets/humano/acoes/pegar-sem-fundo.png"
import soltarimg from "../assets/humano/acoes/soltar-sem-fundo.png"

//social
import simimg from "../assets/humano/social/sim.png"
import naoimg from "../assets/humano/social/nao.png"
import abracoimg from "../assets/humano/social/abraco.png"
import beijoimg from "../assets/humano/social/beijo.png"

//sentimentos
import felizimg from "../assets/humano/sentimentos/feliz.png"
import tristeimg from "../assets/humano/sentimentos/triste.png"
import bravoimg from "../assets/humano/sentimentos/bravo.png"
import medoimg from "../assets/humano/sentimentos/medo.png"
import confusoimg from "../assets/humano/sentimentos/confuso.png"

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
      saudacoes: [
        {texto: 'Ôlá,tudo bem?!',imagem:olaimg},
         {texto: 'Bom dia!',imagem:diaimg},
          {texto:'Boa Tarde!',imagem:tardeimg},
           {texto:'Boa Noite',imagem:noiteimg},
            {texto:'Tchau, Tchau',imagem:tchauimg},
      ],
      acoes:[
         {texto: 'Você pode me ajudar?',imagem:ajudaimg},
         {texto: 'Você pode pegar?',imagem:pegarimg},
          {texto:'Você pode soltar?',imagem:soltarimg},
      ],
      social:[
         {texto: 'SIM!',imagem:simimg},
         {texto: 'NÃO!',imagem:naoimg},
          {texto:'Eu posso te abraçar?',imagem:abracoimg},
          {texto:'Eu posso te dar um beijo?',imagem:beijoimg},
      ],
      sentimentos:[
        {texto: 'Eu estou Feliz', imagem:felizimg} ,
        {texto: 'Eu estou Bravo', imagem:bravoimg} ,
        {texto: 'Eu estou com Medo', imagem:medoimg} ,
        {texto: 'Eu estou triste', imagem:tristeimg} ,
        {texto: 'Eu nao consigo entender', imagem:confusoimg},
      ]
    
 };