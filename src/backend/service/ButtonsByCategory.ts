import { CommunicationButton } from "../interfacesBackend/communicationButton";

export type ButtonsByCategory = Record<string, CommunicationButton[]>;

export function groupButtonsByCategory(buttons: CommunicationButton[]): ButtonsByCategory {
 
    return buttons.reduce<ButtonsByCategory>((acc, button) => {
    
    const categoryKey = button.category.name.toLowerCase();

    if (!acc[categoryKey]) {
      acc[categoryKey] = [];
    }

    acc[categoryKey].push(button);
    return acc;
  }, {});
}