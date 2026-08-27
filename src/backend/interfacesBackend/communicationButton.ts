import { Category } from "./category";

export interface CommunicationButton{
    id: number, 
    label: string, 
    speechText: string, 
    category:Category
}