import clickButton from "../assets/audio/click.wav";

export const playClickSound = () => {
  if (typeof window !== "undefined") {
    const audio = new Audio(clickButton);
    audio.volume = 0.5;
    audio.play().catch(() => {
      // Previne erros caso a página ainda não tenha interação
    });
  }
};