import { Dominio } from "./Dominio";
import { Prodotto } from "./Prodotto";


export class Magazzino {

    id: number;
    prodottoSelected : Prodotto = new Prodotto();
    idNegozio: number;
    tipiAssociati: Dominio[];
    
}
