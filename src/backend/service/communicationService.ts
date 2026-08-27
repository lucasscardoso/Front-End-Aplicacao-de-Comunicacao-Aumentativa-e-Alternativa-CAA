import {CommunicationButton} from '../interfacesBackend/communicationButton'

const API_BASE_URL = '/api'

export const fetchAllButtons = async (): Promise<CommunicationButton[]> => {
  const response = await fetch(`${API_BASE_URL}/buttons/findallbuttons`);
  
  if (!response.ok) {
    throw new Error('Falha ao buscar os botões do servidor');
  }
  
  return await response.json();
};


