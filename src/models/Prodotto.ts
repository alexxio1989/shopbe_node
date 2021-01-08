import { SubDominio } from "./SubDominio";


export class Prodotto {

    id: number;
    nomeProdotto: string;
    descrizione: string;
    prezzo: number;
    tipo: SubDominio = new SubDominio();
    image: string;
    qntRimanente: number;
    unita: string;
    qnt: number;
    step: number;
    idNegozio: number;
    
}
