import { CommunicationButton } from "../backend/interfacesBackend/communicationButton";

export interface SubMenuProps {

  botoesDaCategoria: CommunicationButton[];
  CategoriaSelecionada: string; 
  onSelecionarCategoria: (categoria: string) => void;
}