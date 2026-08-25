 export const falarTexto = (texto: string) => {
  //Cancela qualquer fala que esteja acontecendo no momento
  window.speechSynthesis.cancel();

  const mensagem = new SpeechSynthesisUtterance(texto);

  mensagem.lang = 'pt-BR';

//Obtém todas as vozes disponíveis no navegador
  const vozes = window.speechSynthesis.getVoices();

  //Procura por vozes em português do Brasil femininas
  const vozFeminina = vozes.find(
    (voz) =>
      voz.lang.includes('pt-BR') &&
      (voz.name.includes('Luciana') ||
       voz.name.includes('Helena') ||
       voz.name.includes('Google português do Brasil') ||
       voz.name.includes('Francisca') ||
       voz.name.includes('Yalda'))
  );

  //Se encontrar a voz feminina, atribui à mensagem
  if (vozFeminina) {
    mensagem.voice = vozFeminina;
  }

  window.speechSynthesis.speak(mensagem);
      };
  