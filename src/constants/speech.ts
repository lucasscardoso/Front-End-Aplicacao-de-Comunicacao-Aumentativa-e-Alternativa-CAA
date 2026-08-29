import { TextToSpeech } from '@capacitor-community/text-to-speech';

export const falarTexto = async (texto: string) => {
    try {
        await TextToSpeech.stop();

        await TextToSpeech.speak({
            text: texto,
            lang: 'pt-BR',
            rate: 1.0,
            pitch: 1.0,
            volume: 1.0
        });
    } catch (error) {
        console.error('Erro ao falar texto:', error);
    }
};