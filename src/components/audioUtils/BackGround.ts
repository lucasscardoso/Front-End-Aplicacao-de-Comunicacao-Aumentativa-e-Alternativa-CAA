import bgMusic from "../../assets/audio/ambiente.mp3";

const audioInstance = typeof window !== "undefined" ? new Audio(bgMusic) : null;

if (audioInstance) {
  audioInstance.loop = true;
  audioInstance.volume = 0.10; 
}

export const startBackgroundMusic = () => {
  if (audioInstance && audioInstance.paused) {
    audioInstance.play().catch(() => {
    });
  }
};

export const stopBackgroundMusic = () => {
  if (audioInstance) {
    audioInstance.pause();
  }
};